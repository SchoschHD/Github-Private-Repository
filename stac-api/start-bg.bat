@echo off
REM Start STAC API in background with output to npm.log
cd /d "%~dp0"
echo Starting STAC API in background...
start "" /B cmd /c "npm start > npm.log 2>&1"
echo.
echo Server started. Output logged to npm.log
echo Watch logs with: powershell -Command "Get-Content .\npm.log -Wait -Tail 50"
echo Or view logs with: type npm.log
echo.
echo To stop the server, run: stop-bg.bat
pause
