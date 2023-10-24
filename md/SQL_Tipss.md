### SQL Tips:

```sql

-- String as MULTI-PARAMS:

DECLARE @multiParams VARCHAR(100) = 'Alfa,Beta,Gamma';
DECLARE @paramsXml XML;
SELECT @paramsXml = CAST('<i>' + REPLACE(@multiParams,',','</i><i>') + '</i>' AS XML)


-- UPDATE or CREATE Procedure:

USE [aaaMyDatabase]
GO
IF object_id('dbo.aaaMyProcedure', 'p') is null
    EXEC ('CREATE PROCEDURE myProcedure AS select 1')
GO
ALTER PROCEDURE myProcedure AS
SET NOCOUNT ON
  -- real code here. you don't really need BEGIN-END.
GO

```