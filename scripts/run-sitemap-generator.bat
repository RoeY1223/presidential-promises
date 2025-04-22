@echo off
REM 사이트맵 생성 스크립트 실행 배치 파일
REM 이 파일은 Windows에서 사이트맵 생성 스크립트를 실행합니다

echo 사이트맵 생성 시작...
cd %~dp0
node auto-generate-sitemap.js

echo.
echo 작업 완료! 아무 키나 눌러 종료하세요.
pause > nul
