#### test
```sql
CREATE PROCEDURE [dbo].[spVehicleTransferSingle] (
  @Login dtLogin,
  @Session dtSession,
  @Mode char(1) = 'C',
  @PendingID int = NULL,

  /* Validation controling flag parameters */
  @NotificationFlags dtFlagSet = NULL,
  @LoadedSectionsFlags dtFlagSet = NULL,

  /* Vehicle Identification parameters */
  @RegMarkNo dtRegMark = NULL,
  @VehID int = NULL,

  /* Vehicle Transfer parameters */
  @TransferDate datetime = NULL,

  @OwnerNo int = NULL,

  @VehForResale char(1) = NULL,
  @ChangeRegMarkNo char(1) = 'N',
  @RetainOldRegMarkNo char(1) = 'N',
  @NewRegMarkNo dtRegMark = NULL,
  @RegMarkKind varchar(3) = NULL,
  @VRDHandedToBuyer char(1) = 'N',

  @VehMileage int = NULL,

  /* Transaction payments parameters */
  @OpFeeTotal money = NULL,
  @OpLogPayments varchar(max) = '<items/>',
  @OpReceiptRef varchar(8) = NULL
) as
BEGIN
  DECLARE
    @lValidationResult varchar(50),
    @lValidationErrorMessage varchar(max),
    @lSPResult int,
    @lOwnerID int,
    @DT datetime,
    @lNewOwnerID int,
    @lNewOwnerIsTrader char(1),
    @lNewRegMarkNo dtRegMark,
    @lNewRegMarkStatus char(1),
    @lNewRegMarkOwnerID int,
    @lNewRegMarkPurchaserID int,
    @lNewRegMarkCherished char(1),
    @lNewRegMarkRetainStart datetime,
    @lNewRegMarkRetainFinish datetime,
    @lWaitingOwnerID int,
    @RegOpLogID int,
    @lRetainOperation varchar(4),
    @lTransferOperation varchar(4),
    @lIncrementVehFormerKeeperNo char(1),
    @TranStatus char(1),
    @MainRegOpLogID int,
    @lLogID int,
    @lHasBadAddr char(1),
    @lBadAddrKeeper int,
    @lLoginAuth char(1),
    @lPermitOpLog int

  SELECT
    @lValidationResult = 'OK',
    @lValidationErrorMessage = NULL,
    @NewRegMarkNo = UPPER(@NewRegMarkNo),
    @DT = GETDATE(),
    @lHasBadAddr = 'N',
    @lLoginAuth = dbo.ifnGetAuthByLogin(@Login),
    @lTransferOperation = 'TRNS'

  IF @Mode = 'C' RETURN

  /* ------------ INITIALIZATION ------------ */

  SELECT TOP 1
    @VehID = RegMarkVehID,
    @lOwnerID = RegMarkOwnerID,
    @RegMarkKind = RegMarkKind
  FROM tblRegMarks
  WHERE RegMarkFull = @RegMarkNo

  /* If there is no Vehicle ID then tell about invalid Registration Mark */
  IF @VehID IS NULL
  BEGIN
    SELECT
      @lValidationResult = 'EDIT',
      @lValidationErrorMessage = 'Vehicle Registration Mark "' + CAST(@RegMarkNo as varchar(12)) + '" is invalid',
      @RegMarkNo = NULL
    GOTO ValidationEnd
  END

  -- Owner No And Reg Mark Validation

  DECLARE @lTransferStatus char(1)

  DECLARE
    @lActualRegMarkStatus char(1),
    @lOwnerNo int

  EXEC @lSPResult = ispValidateExistingRegMarkRef
    @Login = @Login,
    @Session = @Session,
    @OwnerID = @lOwnerID,
    @RegMarkNo = @RegMarkNo output,
    @RequiredRegMarkStatus = NULL,
    @ValidationErrorMessage = @lValidationErrorMessage output,
    @ReferencedSections = '',
    @IncludeReferencedSections = 'N',
    @ActualRegMarkStatus = @lActualRegMarkStatus output

  IF @lSPResult > 0
  BEGIN
    SET @lValidationResult = 'EDIT'
    IF ISNULL(@lValidationErrorMessage, '') = ''
      SET @lValidationErrorMessage = 'Registration mark validation failed.'
    GOTO ValidationEnd
  END

  EXEC @lSPResult = ispValidateExistingOwnerRef
    @Login = @Login,
    @Session = @Session,
    @OwnerID = @lOwnerID,
    @OwnerNo = @lOwnerNo output,
    @ValidationResult = @lValidationResult output,
    @ValidationErrorMessage = @lValidationErrorMessage output,
    @ReferencedSections = ';PENDINGSCAN;',
    @IncludeReferencedSections = 'N'

  IF @lSPResult = 2
  BEGIN
    SELECT
      @lValidationErrorMessage = NULL,
      @lValidationResult = 'OK',
      @lHasBadAddr = 'Y',
      @lBadAddrKeeper = @lOwnerID
  END
  ELSE
  BEGIN
    IF @lSPResult <> 0
    BEGIN
      IF @lValidationErrorMessage IS NOT NULL
      BEGIN
        SET @lValidationResult = 'EDIT'
        GOTO ValidationEnd
      END ELSE
      BEGIN
        GOTO Error
      END
    END
  END

  /* ------------ GATHERING VEHICLE TRANSFER INFO FOR VALIDATION SCREEN ------------ */

  EXEC ispVehicleInfoDisplay
    @Login = @Login,
    @Session = @Session,
    @VehID = @VehID,
    @NewVehMileage = @VehMileage,
    @PendingID = @PendingID

  IF @RetainOldRegMarkNo <> 'N'
  BEGIN
    EXEC ispRegNoInfoDisplay
      @Login = @Login,
      @Session = @Session,
      @RegMark = @RegMarkNo,
      @HeaderPrefix = 'Old'
  END

  /* ------------ END OF VALIDATION ------------ */

  IF @TransferDate IS NULL
    SET @TransferDate = GETDATE()

  IF (dbo.ifnFlagSetHasFlag(@NotificationFlags, 'VEH_TRANSFER_INFO') = 0)
  BEGIN
    SELECT
      @lValidationResult = 'VEH_TRANSFER_INFO',
      @NotificationFlags = dbo.ifnFlagSetAppendFlag(@NotificationFlags, 'VEH_TRANSFER_INFO')
    GOTO ValidationEnd
  END

  IF @OwnerNo IS NULL
  BEGIN
    SELECT
      @lValidationResult = 'VEH_TRANSFER_INFO',
      @lValidationErrorMessage = 'Owner No is required field'
    GOTO ValidationEnd
  END

  IF @lNewOwnerID IS NULL
  BEGIN
    SELECT
      @lNewOwnerID = OwnerID,
      @lNewOwnerIsTrader = OwnerIsTrader
    FROM vwOwners
    WHERE @OwnerNo = OwnerNo
  END

  IF @lNewOwnerID IS NULL
  BEGIN
    SELECT
      @lValidationResult = 'VEH_TRANSFER_INFO',
      @lValidationErrorMessage = 'Owner No ' + cast(@OwnerNo as varchar) + ' is invalid',
      @OwnerNo = NULL
    GOTO ValidationEnd
  END

  -- Vehicle can be transferred for resale is New Owner is Trader
  IF @lNewOwnerIsTrader <> 'Y' AND @VehForResale = 'Y'
  BEGIN
    SELECT
      @lValidationResult = 'VEH_TRANSFER_INFO',
      @lValidationErrorMessage = 'Only trader can buy vehicle for resale'
    GOTO ValidationEnd
  END

  EXEC @lSPResult = ispValidateExistingOwnerRef
    @Login = @Login,
    @Session = @Session,
    @OwnerID = @lNewOwnerID,
    @OwnerNo = @OwnerNo output,
    @ValidationResult = @lValidationResult output,
    @ValidationErrorMessage = @lValidationErrorMessage output,
    @ReferencedSections = ';PENDINGSCAN;',
    @IncludeReferencedSections = 'N'

  IF @lSPResult = 2
  BEGIN
    SELECT
      @lValidationErrorMessage = NULL,
      @lValidationResult = 'OK',
      @lHasBadAddr = 'Y',
      @lBadAddrKeeper = @lNewOwnerID
  END
  ELSE
  BEGIN
    IF @lSPResult <> 0
    BEGIN
      IF @lValidationErrorMessage IS NOT NULL
      BEGIN
        SET @lValidationResult = 'VEH_TRANSFER_INFO'
        GOTO ValidationEnd
      END ELSE
      BEGIN
        GOTO Error
      END
    END
  END

  IF (@lHasBadAddr = 'Y') AND
    (dbo.ifnFlagSetHasFlag(@NotificationFlags, 'BAD_ADDR') = 0)
  BEGIN
    EXEC ispOwnerInfoDisplay
      @Login = @Login,
      @Session = @Session,
      @OwnerID = @lBadAddrKeeper,
      @HeaderPrefix = 'BadAddr'

    SELECT
      @NotificationFlags = dbo.ifnFlagSetAppendFlag(@NotificationFlags, 'BAD_ADDR'),
      @lValidationResult = 'BAD_ADDRESS_CHANGE_CONFIRM';
    GOTO ValidationEnd;
  END

  if (dbo.ifnFlagSetHasFlag(@NotificationFlags, 'CHANGE_BAD_ADDR') <> 0)
  BEGIN
    SELECT 'AddressCorrectInfo' HEADER__
    SELECT @OwnerNo as OwnerNo

    SELECT @lValidationResult = 'GOTO_CHANGE_ADDRESS';
    GOTO ValidationEnd;
  END

  IF @ChangeRegMarkNo = 'Y'
  BEGIN
    IF dbo.ifnFlagSetHasFlag(@NotificationFlags, 'VEH_NEWREGMARK_INFO') = 0
    BEGIN
      /* Defining Pool for New Registration Mark */
      DECLARE
        @lRegMarkType char(1)
      SELECT
        @lRegMarkType = dbo.ifnGetRegMarkTypeByKind(@RegMarkKind),
        @RegMarkKind = dbo.ifnGetRegMarkKindByType(@lRegMarkType, @lLoginAuth)

      SELECT
        @lValidationResult = 'VEH_NEWREGMARK_INFO',
        @NotificationFlags = dbo.ifnFlagSetAppendFlag(@NotificationFlags, 'VEH_NEWREGMARK_INFO')
      GOTO ValidationEnd
    END

    IF @NewRegMarkNo IS NULL
    BEGIN
      SELECT
        @lValidationResult = 'VEH_NEWREGMARK_INFO',
        @lValidationErrorMessage = 'New Registration Mark is required'
      GOTO ValidationEnd
    END

    IF @RetainOldRegMarkNo <> 'N' AND @NewRegMarkNo = @RegMarkNo
    BEGIN
      SELECT
        @lValidationResult = 'VEH_NEWREGMARK_INFO',
        @lValidationErrorMessage = 'Specified Registration Mark is retained by previous Owner, please choose another registration mark.',
        @NewRegMarkNo = NULL
      GOTO ValidationEnd
    END

    DECLARE @lInvalidRegMarkNo dtRegMark
    SELECT TOP 1
      @lInvalidRegMarkNo = @NewRegMarkNo
    FROM tblVehicles as V
      INNER JOIN dicBodies as B on B.BodyCode = V.VehBody
      INNER JOIN dicVehicleGroups as G on G.VehGroupCode = B.BodyVehGroup
      INNER JOIN tblRegMarks as RM2 on RM2.RegMarkFull = @NewRegMarkNo
      INNER JOIN fxRegMarkKind as K on K.RegMarkKindCode = RM2.RegMarkKind and K.RegMarkKindType <> 'A'
    WHERE (V.VehID = @VehID) AND (K.RegMarkKindType <> G.VehGroupRegMarkType)

    IF @lInvalidRegMarkNo IS NOT NULL
    BEGIN
      SELECT
        @lValidationResult = 'VEH_NEWREGMARK_INFO',
        @lValidationErrorMessage = 'Specified Registration Mark is not applicable to this vehicle',
        @NewRegMarkNo = NULL
      GOTO ValidationEnd
    END

    IF @NewRegMarkNo IS NOT NULL
    BEGIN
      /* Retrieving actual Registration Mark Status and Owner ID */
      SELECT
        @lNewRegMarkStatus = RegMarkStatus,
        @lNewRegMarkOwnerID = RegMarkOwnerID,
        @lNewRegMarkCherished = RegMarkCherished,
        @lNewRegMarkPurchaserID = RegMarkRetainPurchaserID,
        @lNewRegMarkRetainStart = RegMarkRetainStart,
        @lNewRegMarkRetainFinish = RegMarkRetainFinish
      FROM tblRegMarks
      WHERE RegMarkFull = @NewRegMarkNo

      /* Retrieving Registration Mark Waiting Owner */
      SELECT
        @lWaitingOwnerID = WaitOwnerID
      FROM tblRegMarkWaitingList
      WHERE WaitRegMarkFull = @NewRegMarkNo

      /* If there is no Status then tell about invalid Registration Mark */
      IF @lNewRegMarkStatus IS NULL
      BEGIN
        SELECT
          @lValidationResult = 'VEH_NEWREGMARK_INFO',
          @lValidationErrorMessage = 'Registration mark "' + cast(@NewRegMarkNo as varchar(12)) + '" does not exist',
          @NewRegMarkNo = NULL
        GOTO ValidationEnd
      END

      /* Checking if Registration Mark is in Waiting List */
      IF @lNewRegMarkStatus = 'Z' AND @lWaitingOwnerID IS NOT NULL AND @lWaitingOwnerID <> @lOwnerID
      BEGIN
        SELECT
          @lValidationResult = 'VEH_NEWREGMARK_INFO',
          @lValidationErrorMessage = 'Specified registration mark is in waiting list for different owner'
        GOTO ValidationEnd
      END ELSE
      /* Registration Mark can be assigned to the vehicle only if it is unused (status 'Z')
         or it is retained by Owner that change registration mark (status 'R' and Reg Mark Owner is equal to Vehicle Owner) */
      IF NOT(
           @lNewRegMarkStatus = 'Z' OR
           (@lNewRegMarkStatus = 'R' AND
           (@lNewRegMarkOwnerID = @lNewOwnerID OR (@lNewRegMarkPurchaserID IS NOT NULL AND @lNewRegMarkPurchaserID = @lNewOwnerID)))
         )
      BEGIN
        SELECT
          @lValidationResult = 'VEH_NEWREGMARK_INFO',
          @lValidationErrorMessage = 'Specified registration mark is retained by different owner or is in use'
        PRINT 'We are here'
        GOTO ValidationEnd
      END

      /* Cherished Registration Mark can be assigned only if it is retained */
      IF @lNewRegMarkStatus <> 'R'
      BEGIN
        SET @lNewRegMarkCherished = 'N'
      END
    END

    /* Validating entered Registration Mark */
    EXEC @lSPResult = ispValidateExistingRegMarkRef
      @Login = @Login,
      @Session = @Session,
      @OwnerID = NULL,
      @RegMarkNo = @NewRegMarkNo output,
      @RequiredRegMarkStatus = NULL,
      @RequiredRegMarkKind = @RegMarkKind,
      @ValidationErrorMessage = @lValidationErrorMessage output,
      @ReferencedSections = ';TRANSFERCHECK;PENDINGSCAN;',
      @IncludeReferencedSections = 'N',
      @SameDayRetainedMarkAssignDate = @TransferDate,
      @ActualRegMarkStatus = @lActualRegMarkStatus output

    IF (@lSPResult = 1) OR (@lSPResult > 3)
    BEGIN
      SET @lValidationResult = 'VEH_NEWREGMARK_INFO'
      IF ISNULL(@lValidationErrorMessage, '') = ''
        SET @lValidationErrorMessage = 'Registration mark validation failed.'
      GOTO ValidationEnd
    END
    ELSE
    BEGIN
      SET @lValidationErrorMessage = NULL
    END

    IF NOT EXISTS(
         SELECT TOP 1 1
         FROM tblRegMarks
         WHERE (RegMarkFull = @NewRegMarkNo) AND
          ((RegMarkOwnerID IS NULL) OR (RegMarkOwnerID IN (@lOwnerID, @lNewOwnerID)))
       )
    BEGIN
      SELECT
        @lValidationResult = 'VEH_NEWREGMARK_INFO',
        @lValidationErrorMessage = 'Registration mark "'+IsNull(@NewRegMarkNo, 'none')+'" belongs to the different owner'
      GOTO ValidationEnd
    END

    IF @NewRegMarkNo <> @RegMarkNo
    BEGIN
      /* Checking entered Registration Mark */
      EXEC @lSPResult = ispRegMarkCheck
        @Login = @Login,
        @Session = @Session,
        @OwnerID = @lNewOwnerID,
        @RegMarkNo = @NewRegMarkNo,
        @RegMarkCherished = @lNewRegMarkCherished,
        @ValidationErrorMessage = @lValidationErrorMessage output

      IF (@lSPResult <> 0)
      BEGIN
        IF (@lValidationErrorMessage IS NOT NULL)
        BEGIN
          SET @lValidationResult = 'VEH_NEWREGMARK_INFO'
          GOTO ValidationEnd
        END ELSE
        BEGIN
          GOTO Error
        END
      END
    END
  END

  /* ------------ THIS SECTION TURN ON IF REGISTRATION MARK IS RETAINED ------------ */
  /* ------------ REGISTRATION MARK TRANSACTION INFO CHECKING STUFF ------------ */

  SET @lRetainOperation =
    CASE @RetainOldRegMarkNo
      WHEN 'Y' THEN 'ARMK'
      WHEN 'A' THEN 'VRMK'
      WHEN 'N' THEN 'XRMK'
    END

  DECLARE
    @lCalcVersion int,
    @lActualFeeTotal money,
    @lTransferOperationPrice money,
    @lRetainOperationPrice money,
    @lOperationPrice money,
    @lOpLogRefundment money

  CREATE TABLE #TABOperationPayments (
    OpPaymentType char(1) collate database_default NULL,
    OpPaymentFee money,
    OpPaymentAdditCharge money NULL
  )

  SET @OpFeeTotal = 0

  EXEC ispCalculateVehOperationPrice
    @Login = @Login,
    @Session = @Session,
    @OwnerID = @lOwnerID,
    @OpKindCode = @lTransferOperation,
    @OpDate = @TransferDate,
    @CalcVersion = @lCalcVersion output,
    @OpFee = @lTransferOperationPrice output,
    @OpRefundValue = @lOpLogRefundment output,
    @VehTransferForResale = @VehForResale

  IF @lTransferOperationPrice > 0
    SET @OpFeeTotal = isnull(@OpFeeTotal, 0) + @lTransferOperationPrice

  IF @RetainOldRegMarkNo <> 'N'
  BEGIN

    EXEC ispCalculateVehOperationPrice
      @Login = @Login,
      @Session = @Session,
      @OwnerID = @lOwnerID,
      @OpKindCode = @lRetainOperation,
      @OpDate = @TransferDate,
      @CalcVersion = @lCalcVersion output,
      @OpFee = @lRetainOperationPrice output,
      @OpRefundValue = @lOpLogRefundment output,
      @VehTransferForResale = @VehForResale

    IF @lRetainOperationPrice > 0
      SET @OpFeeTotal = isnull(@OpFeeTotal, 0) + @lRetainOperationPrice
  END

  IF (dbo.ifnFlagSetHasFlag(@NotificationFlags, 'REGMARK_TRAN_INFO_DONE') = 0)
  BEGIN
    EXEC @lSPResult = dbo.ispRefreshOperationPrice
      @OperationPayments = @OpLogPayments,
      @aFeeValue = @OpFeeTotal,
      @OwnerID = @lOwnerID

    IF (@lSPResult = 1)
    BEGIN
      EXEC dbo.ispBuildNewOperationPayments
        @OpLogPayments output
    END

    SET @NotificationFlags = dbo.ifnFlagSetAppendFlag(dbo.ifnFlagSetAppendFlag(@NotificationFlags, 'REGMARK_TRAN_INFO_DONE'), 'FEE_CONF')
    IF @OpFeeTotal <> 0
    BEGIN
      SET @lValidationResult = 'REGMARK_TRAN_INFO_REQUIRED'
      GOTO ValidationEnd
    END
  END

  IF @OpFeeTotal <> 0
  BEGIN
    EXEC @lSPResult = ispParseOperationPayments
      @OperationPayments = @OpLogPayments,
      @ValidationErrorMessage = @lValidationErrorMessage output,
      @OpFeeTotal = @lActualFeeTotal output,
      @DateForFee = @TransferDate,
      @OwnerID = @lOwnerID

    IF (@lSPResult = 2)
    BEGIN
      SELECT
        @lValidationResult = 'REGMARK_TRAN_INFO_REQUIRED',
        @lValidationErrorMessage = 'At least one payments record is required for the operation.'
      GOTO ValidationEnd
    END ELSE
    IF (@lSPResult > 0)
    BEGIN
        IF NOT(@lValidationErrorMessage IS NULL)
        BEGIN
          SET @lValidationResult = 'REGMARK_TRAN_INFO_REQUIRED'
          GOTO ValidationEnd
        END
        GOTO Error
    END
  END

  IF (@lActualFeeTotal <> 0)
  BEGIN
    DECLARE @lExpectedPrice money

    EXEC ispCalculateVehOperationPrice
      @Login = @Login,
      @Session = @Session,
      @OwnerID = null,
      @OpKindCode = @lTransferOperation,
      @OpDate = @TransferDate,
      @CalcVersion = @lCalcVersion output,
      @OpFee = @lOperationPrice output,
      @OpRefundValue = @lOpLogRefundment output,
      @VehTransferForResale = @VehForResale

    IF @lOperationPrice > 0
      SET @lExpectedPrice = @lExpectedPrice + @lOperationPrice

    IF @RetainOldRegMarkNo <> 'N'
    BEGIN

      EXEC ispCalculateVehOperationPrice
        @Login = @Login,
        @Session = @Session,
        @OwnerID = null,
        @OpKindCode = @lRetainOperation,
        @OpDate = @TransferDate,
        @CalcVersion = @lCalcVersion output,
        @OpFee = @lOperationPrice output,
        @OpRefundValue = @lOpLogRefundment output,
        @VehTransferForResale = @VehForResale

      IF @lOperationPrice > 0
        SET @lExpectedPrice = @lExpectedPrice + @lOperationPrice
    END

    IF (@lExpectedPrice <> @lActualFeeTotal)
    BEGIN
      SELECT
        @lValidationResult = 'REGMARK_TRAN_INFO_REQUIRED',
        @lValidationErrorMessage = 'Fee for this operation should be ' + cast(@lExpectedPrice as varchar(10)) + ' pounds'
      GOTO ValidationEnd
    END
  END
  ELSE
  BEGIN
    SET @lTransferOperationPrice = 0
    SET @lRetainOperationPrice = 0
  END

  /* ------------ GATHERING TRANSACTION INFO FOR VALIDATION SCREEN ------------ */

  SELECT 'TransactionInfo' HEADER__
  SELECT
    @OpReceiptRef OpLogReceiptRef,
    @lActualFeeTotal ActualFeeTotal

  SELECT 'TransactionDetailsInfo' HEADER__
  SELECT * FROM #TABOperationPayments

  /* ------------ REGISTRATION MARK TRANSACTION FEE CONFIRMATION ------------ */

  IF (@lActualFeeTotal = 0)
  BEGIN
    IF (dbo.ifnFlagSetHasFlag(@NotificationFlags, 'FEE_CONF') = 0) AND
        (dbo.ifnFlagSetHasFlag(@NotificationFlags, 'FEE_REJ') = 0)
    BEGIN
      SET @lValidationResult = 'REGMARK_TRAN_FEE_VALIDATION'
      GOTO ValidationEnd
    END

    IF (dbo.ifnFlagSetHasFlag(@NotificationFlags, 'FEE_CONF') = 0)
    BEGIN
      SELECT
        @lValidationResult = 'REGMARK_TRAN_INFO_REQUIRED',
        @NotificationFlags = dbo.ifnFlagSetRemoveFlag(dbo.ifnFlagSetRemoveFlag(@NotificationFlags, 'FEE_CONF'), 'FEE_REJ')
      GOTO ValidationEnd
    END
  END

ValidationEnd:

  SET @lNewRegMarkNo = ISNULL(@NewRegMarkNo, @RegMarkNo)

  IF (@Mode <> 'S') AND (@lValidationResult = 'OK') AND (@lValidationErrorMessage IS NULL)
  BEGIN
    EXEC ispRegNoInfoDisplay
      @Login = @Login,
      @Session = @Session,
      @RegMark = @lNewRegMarkNo

    EXEC ispOwnerInfoDisplay
      @Login = @Login,
      @Session = @Session,
      @OwnerID = @lNewOwnerID
  END
  ELSE
  BEGIN
    EXEC ispRegNoInfoDisplay
      @Login = @Login,
      @Session = @Session,
      @RegMark = @RegMarkNo

    EXEC ispOwnerInfoDisplay
      @Login = @Login,
      @Session = @Session,
      @OwnerID = @lOwnerID
  END

  IF (@Mode <> 'S') OR (@lValidationResult <> 'OK') OR
     (NOT(@lValidationErrorMessage IS NULL))
    GOTO OK


  /* ------------ VEHICLE TRANSFER INFO SUBMIT STUFF ------------ */
  /* Cancel Vehicle Permits*/

  DECLARE @lPermitVehID int = (SELECT TOP 1 PermVehID FROM tblPermitVehicle WHERE PermVehVehID = @VehID ORDER BY PermVehID)

  WHILE NOT @lPermitVehID IS NULL
  BEGIN
    EXEC @lSPResult = dbo.ispPermitsCancel
      @Login = @Login,
      @Session = @Session,
      @PermVehicleID = @lPermitVehID,
      @PermOwnerID = @lOwnerID,
      @PermCancelComment = 'Vehicle has been transfered',
      @PermCanReplace = 'Y',
      @CreationTime = @DT,
      @NotificationSendRequired = 'Y',
      @PermOpLogID = @lPermitOpLog OUTPUT

    IF @lSPResult <> 0
    BEGIN
      GOTO Error
    END

    SET @lPermitVehID = (SELECT TOP 1 PermVehID FROM tblPermitVehicle WHERE PermVehVehID = @VehID AND PermVehID > @lPermitVehID ORDER BY PermVehID)
  END

  /* Changing Main Owner of the Vehicle */
  EXEC ispVehicleChangeOwner
    @Login = @Login,
    @Session = @Session,
    @VehID = @VehID,
    @NewMainOwnerID = @lNewOwnerID,
    @NewRegMark = @lNewRegMarkNo,
    @OldOwnerRetainsRegMark = @RetainOldRegMarkNo,
    @RegMarkLastRegistered = @TransferDate,
    @CreationTime = @DT

  IF (@@ERROR <>0)
  BEGIN
    RAISERROR('Failed to change main owner of the vehicle.', 16, 1)
    GOTO Error
  END

  /* Defining if Keeper Number need to be increased */
  /* If Vehicle is transferred for following resale Keeper Number stay the same */
  SET @lIncrementVehFormerKeeperNo = 
    CASE 
      WHEN 
        @VehForResale = 'Y' OR
        dbo.ifnIsOwnerForPendingTransferHeld(@lNewOwnerID) = 'Y'
      THEN 'N' 
      ELSE 'Y'
    END

  IF @NewRegMarkNo <> @RegMarkNo
  BEGIN
    EXEC @RegOpLogID = ispRegMarkOperationCreate
      @Login = @Login,
      @Session = @Session,
      @RegOpLogGroupOperation = @lTransferOperation,
      @RegOpLogOperation = @lRetainOperation,--<-- this is real operation
      @RegOpLogRegMarkNo = @RegMarkNo,
      @RegOpLogOldVehID = @VehID,
      @RegOpLogMainOwnerID = @lOwnerID,
      @RegOpLogMainOwnerDetailsUpdated = 'N',
      @RegOpLogVehDetailsUpdated = 'N',
      @RegOpLogFee = @lRetainOperationPrice,
      @RegOpLogCalcVer = @lCalcVersion,
      @RegOpLogMileage = @VehMileage,
      @ProcessPendingScan = 'N',
      @CreationTime = @DT,
      @RegOpLogPayerOwnerID = @lOwnerID

    EXEC @lLogID = ispRegMarkOperationCreate
      @Login = @Login,
      @Session = @Session,
      @RegOpLogGroup = @RegOpLogID,
      @RegOpLogOperation = 'CMRK',
      @RegOpLogRegMarkNo = @lNewRegMarkNo,
      @RegOpLogVehID = @VehID,
      @RegOpLogMainOwnerID = @lNewOwnerID,
      @RegOpLogMainOwnerDetailsUpdated = 'N',
      @RegOpLogVehDetailsUpdated = 'N',
      @RegOpLogMileage = @VehMileage,
      @ProcessPendingScan = 'N',
      @CreationTime = @DT

    EXEC ispVehicleLicenseReIssue
      @Login = @Login,
      @Session = @Session,
      @VehLicVehID = @VehID,
      @VehLicCreatedByOperation = @lLogID

    EXEC @MainRegOpLogID = ispRegMarkOperationCreate
      @Login = @Login,
      @Session = @Session,
      @RegOpLogGroup = @RegOpLogID,
      @RegOpLogOperation = @lTransferOperation,
      @RegOpLogRegMarkNo = @lNewRegMarkNo,
      @RegOpLogOldVehID = @VehID,
      @RegOpLogVehID = @VehID,
      @RegOpLogOldMainOwnerID = @lOwnerID,
      @RegOpLogMainOwnerID = @lNewOwnerID,
      @RegOpLogMainOwnerDetailsUpdated = 'N',
      @RegOpLogFee = @lTransferOperationPrice,
      @RegOpLogVehDetailsUpdated = 'N',
      @RegOpLogMileage = @VehMileage,
      @IncrementVehFormerKeeperNo = @lIncrementVehFormerKeeperNo,
      @ProcessPendingScan = 'N',
      @ForceOwnerUpdateNotification = 'Y',
      @CreationTime = @DT,
      @RegOpLogConnectedPERMOp = @lPermitOpLog,
      @RegOpLogPayerOwnerID = @lOwnerID

    EXEC ispRegMarkOperationSetVehicleMain
      @Login = @Login,
      @Session = @Session,
      @RegOpLogGroup = @RegOpLogID,
      @RegOpLogVehID = @VehID,
      @MainRegOpLogID = @MainRegOpLogID
  END
  ELSE
  BEGIN
    EXEC @MainRegOpLogID = ispRegMarkOperationCreate
      @Login = @Login,
      @Session = @Session,
      @RegOpLogOperation = @lTransferOperation,
      @RegOpLogRegMarkNo = @lNewRegMarkNo,
      @RegOpLogOldVehID = @VehID,
      @RegOpLogVehID = @VehID,
      @RegOpLogOldMainOwnerID = @lOwnerID,
      @RegOpLogMainOwnerID = @lNewOwnerID,
      @RegOpLogMainOwnerDetailsUpdated = 'N',
      @RegOpLogFee = @lTransferOperationPrice,
      @RegOpLogVehDetailsUpdated = 'N',
      @RegOpLogMileage = @VehMileage,
      @IncrementVehFormerKeeperNo = @lIncrementVehFormerKeeperNo,
      @ProcessPendingScan = 'N',
      @ForceOwnerUpdateNotification = 'Y',
      @CreationTime = @DT,
      @RegOpLogConnectedPERMOp = @lPermitOpLog,
      @RegOpLogPayerOwnerID = @lOwnerID

    SET @RegOpLogID = @MainRegOpLogID
  END

  /* Adding documents to return */
  /*DECLARE @lRetVRC xml
  SET @lRetVRC = (SELECT TOP 1
                    'V' as "@type", RegOpLogID as "@refid"
                  FROM tblRegMarkOperationLog
                  WHERE RegOpLogVehID = @VehID
                    AND RegOpLogID < @RegOpLogID
                  ORDER BY RegOpLogID DESC
                  FOR XML PATH('doc'), ROOT('docs'))
  EXEC @lSPResult = ispReturnDocsManage
    @aLogin = @Login,
    @aSession = @Session,
    @aMode = 'I',
    @aRetDocOperationRef = @RegOpLogID,
    @aRetDocOperationSysType = 'V',
    @aRetDocIsReturned = 'N',
    @aRetDocIsBlocking = 'Y',
    @aRetDocDocuments = @lRetVRC,
    @aValidationErrorMessage = @lValidationErrorMessage output
  */

  -- select * from fxTranStatus
  INSERT INTO tblVehicleTransfer (
    TranVehID, TranABuyOwnerID, TranAVehForResale,
    TranAChangeRegMark, TranANewRegMark, TranARetainOldRegMark,
    TranADate, TranABuyerHasVRD, TranStatus, TranSellOperation,
    TranDLC, TranULC, TranDocumentsMasterGroup
  ) VALUES (
    @VehID, @lNewOwnerID, @VehForResale,
    @ChangeRegMarkNo, @lNewRegMarkNo, @RetainOldRegMarkNo,
    @TransferDate, @VRDHandedToBuyer, 'C', @MainRegOpLogID,
    @DT, @Login, @RegOpLogID
  )

  EXEC dbo.ispRegMarkOperationGroupProcessPendingScan
    @Login = @Login,
    @Session = @Session,
    @RegOpLogGroup = @RegOpLogID,
    @MergePendingScanMode = 'Y'

  EXEC ispRegMarkUnLock
    @Login = @Login,
    @Session = @Session,
    @RegMarkNo = @lNewRegMarkNo,
    @ValidationErrorMessage = @lValidationErrorMessage output

  /* Retrieving Registration Mark information for Certificate of Retention */
  IF @RetainOldRegMarkNo = 'Y'
  BEGIN
    EXEC @lSpResult = ispRegMarkCertRetentionInfo
      @aLogin = @Login,
      @aSession = @Session,
      @aMode = 'S',
      @aRegMarkNo = @RegMarkNo,
      @aValidationErrorMessage = @lValidationErrorMessage

    IF (@lSPResult <> 0)
    BEGIN
      SET @lValidationErrorMessage = IsNull(@lValidationErrorMessage, 'Failed to generate Certificate of Retention')
      RAISERROR(@lValidationErrorMessage, 1, 16)
      GOTO Error
    END
  END

  EXEC ispVehicleRegCertificateInfo
    @Login = @Login,
    @Session = @Session,
    @VehID = @VehID,
    @ValidationError = @lValidationErrorMessage output,
    @Header = 'BatchCert'

  IF @lValidationErrorMessage IS NOT NULL
  BEGIN
    RAISERROR(@lValidationErrorMessage, 1, 16)
    GOTO Error
  END

  EXEC dbo.ispFRDPrefRateViolationsCreateIfExist
    @ViolationType = 'T',
    @VehID = @VehID,
    @RegOpLogID = @RegOpLogID

  SELECT 'LettersStatus' HEADER__
  SELECT 'Y' ShowLetter


  EXEC dbo.ispRemoveFromPending @PendingID = @PendingID

  SELECT 'ScanToolParameters' HEADER__
  SELECT
    ISNULL(@RegOpLogID, @MainRegOpLogID) as RegOpLogGroup,
    dbo.ifnGetScanLaterByLogin(@Login) as ScanLater,
    CASE WHEN EXISTS(SELECT 1 FROM dbo.ifnDetectInvolvedDocumentsForOperation(ISNULL(@RegOpLogID, @MainRegOpLogID)))
      THEN 'Y' ELSE 'N' END as NeedsScanning

  /* ------------ END OF SUBMIT STUFF ------------ */
OK:

  SELECT 'ValidationResult' HEADER__
  SELECT
    @lValidationResult VALIDATION_RESULT__,
    @lValidationErrorMessage VALIDATION_ERROR__

  SELECT 'IncommingParams' HEADER__
  SELECT
    @NotificationFlags as NotificationFlags,
    @LoadedSectionsFlags as LoadedSectionsFlags,

    /* Vehicle Idenfification parameters */
    @RegMarkNo as RegMarkNo,
    @RegMarkKind as RegMarkKind,
    @VehID as VehID,

    /* Vehicle Transfer Vehicle parameters */
    @OwnerNo as OwnerNo,

    @VehForResale as VehForResale,
    @ChangeRegMarkNo as ChangeRegMarkNo,
    @RetainOldRegMarkNo as RetainOldRegMarkNo,
    @NewRegMarkNo as NewRegMarkNo,

    @VehMileage as VehMileage,
    @TransferDate as TransferDate,
    @VRDHandedToBuyer as VRDHandedToBuyer,

    /* Transaction payments parameters */
    @OpFeeTotal as OpFeeTotal,
    @OpLogPayments as OpLogPayments,
    @OpReceiptRef as OpReceiptRef

  RETURN 0
Error:
  RETURN 1
END
```