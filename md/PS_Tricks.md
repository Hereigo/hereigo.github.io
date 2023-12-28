### PowerShell Tips & Tricks :

```powershell
# - - - WRITE FILENAME AS A COMMENT INTO EVERY FILE.SQL IN THE DIRECTORY :

#@("--nameofSP","") +  (Get-Content -path .\procAcquisitionsCampaignsSet.proc.sql) | Set-Content -path.\procAcquisitionsCampaignsSet.proc.sql
#Get-Content -path .\procAcquisitionsCampaignsSet.proc.sql
$Directory="C:\Users\USER-NAME\source\PowerShell_Test"

Get-ChildItem $Directory -Filter "*.sql" `
    | Foreach-Object { `
        "--" + $_.Name + "`r`n" + (get-content $_) `
        | Out-File $_;  `
        Move-Item -Path $_ -Destination $Directory `
    }

# - - - SEARCH FOR STRING - - - :
$path = "c:\work"
$matchingPattern = "Bla-Bla-Bla Some text."

(Get-ChildItem $path -File  -exclude *.zip).Where{(Get-Content $_ -TotalCount 1) -match $matchingPattern }
# OR :
Get-ChildItem -recurse | Select-String -pattern $matchingPattern -Exclude *.zip,*.dbmdl,*.jfm | group $path | select name

# - - - CERTIFICATE ADD - - - :
cd Cert:\LocalMachine\Root

C:\Setup\makecert -pe -is Root -ir LocalMachine -in "Cert-ISSUER-Name" -n CN="Cert-ISSUED-TO-Name" -eku 1.3.6.1.5.5.7.3.1 -ss Root -sr localmachine -sky exchange -sp "Microsoft RSA SChannel Cryptographic Provider" -sy 12
echo ". Certificate Cert-ISSUED-TO-Name added."

# - - - CERTIFICATE REMOVE - - - :
cd Cert:\LocalMachine\Root

Get-ChildItem | Where Subject -like "*CN=Cert-ISSUED-TO-Name" # -- just for logging name to console
Get-ChildItem | Where Subject -like "*CN=Cert-ISSUED-TO-Name" | Remove-Item
echo ". Certificate Cert-ISSUED-TO-Name removed."

# - - - CALL ON REMOTE SERVER - - - :
param(
    [string]$Publisher = 'admin',
    [string]$password = 'password:)'
)
$pwdSecureString = $password | ConvertTo-SecureString -AsPlainText -force
$creds = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Publisher, $pwdSecureString
$appServer = 'my-app-server'

Invoke-Command -ComputerName $appServer -ScriptBlock { Get-service -Name 'WinRM' } -Credential $creds

# Invoke-Command -ComputerName $appServer -ScriptBlock { Get-ChildItem C:\ } -Credential $creds
```