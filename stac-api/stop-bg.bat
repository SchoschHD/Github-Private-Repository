@echo off
REM Stop STAC API by killing node.exe processes that are running src\index.js
echo Stopping STAC API...
for /f "tokens=2" %%A in ('wmic process where "CommandLine like '%%src\\index.js%%'" get ProcessId ^| findstr /r "[0-9]"') do (
    echo Killing process %%A...
    taskkill /PID %%A /F >nul 2>&1
)
echo.
echo STAC API stopped.
pause
