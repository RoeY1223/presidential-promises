@echo off
REM 이 배치 파일은 한글 HTML 파일을 영문 폴더로 이동시키는 작업을 수행합니다.

REM 작업 디렉토리 설정
cd /d "C:\Users\R\OneDrive\Desktop\presidential-promises\candidates"

echo 파일 이동 작업을 시작합니다...

REM 1. 한글 HTML 파일을 영문 폴더로 이동
REM 안철수.html -> ahn-cheol-soo/ahn-cheol-soo.html
if exist "안철수.html" (
  if exist "ahn-cheol-soo" (
    copy "안철수.html" "ahn-cheol-soo\ahn-cheol-soo.html" /Y
  ) else (
    mkdir "ahn-cheol-soo"
    copy "안철수.html" "ahn-cheol-soo\ahn-cheol-soo.html" /Y
  )
)

REM 이재명.html -> lee-jae-myung/lee-jae-myung.html
if exist "이재명.html" (
  if exist "lee-jae-myung" (
    copy "이재명.html" "lee-jae-myung\lee-jae-myung.html" /Y
  ) else (
    mkdir "lee-jae-myung"
    copy "이재명.html" "lee-jae-myung\lee-jae-myung.html" /Y
  )
)

echo 작업이 완료되었습니다.
echo 최종 디렉토리 구조:
dir /B "ahn-cheol-soo"
dir /B "lee-jae-myung"
pause
