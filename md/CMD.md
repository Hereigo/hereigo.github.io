```bat

REM * * * * * Do Not Close Console when command finished. * * * * *

cmd /k

REM * * * * * Get Local DateTime as 2000.12.31_235959 * * * * *

@echo off
for /F "usebackq tokens=1,2 delims==" %%i in (`wmic os get LocalDateTime /VALUE 2^>NUL`) do if '.%%i.'=='.LocalDateTime.' set ldt=%%j
set ldt=%ldt:~0,4%.%ldt:~4,2%.%ldt:~6,2%_%ldt:~8,2%%ldt:~10,2%%ldt:~12,2%
echo %ldt%

REM * * * * * Archivate Project's Code Only. * * * * *

set MY_VAR=123 
"C:\Program Files\7-Zip\7z.exe" u -r "C:\BLA_BLA_BKP_%MY_VAR%.7z" "C:\BLA_BLA_PROJECT\" -x!*.7z -xr!bin -xr!obj -xr!.git -xr!.vs -xr!packages

REM * * * * * . * * * * *


```