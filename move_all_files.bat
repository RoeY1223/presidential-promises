@echo off
REM 이 배치 파일은 영문 HTML 파일을 각 영문 폴더로 이동시키는 작업을 수행합니다.

REM 작업 디렉토리 설정
cd /d "C:\Users\R\OneDrive\Desktop\presidential-promises\candidates"

echo 파일 이동 작업을 시작합니다...

REM 각 영문 HTML 파일을 해당 영문 폴더로 복사
copy "kang-sung-hee.html" "kang-sung-hee\kang-sung-hee.html" /Y
copy "kwon-young-gook.html" "kwon-young-gook\kwon-young-gook.html" /Y
copy "kim-kyung-soo.html" "kim-kyung-soo\kim-kyung-soo.html" /Y
copy "kim-dong-yeon.html" "kim-dong-yeon\kim-dong-yeon.html" /Y
copy "kim-moon-soo.html" "kim-moon-soo\kim-moon-soo.html" /Y
copy "kim-jae-yeon.html" "kim-jae-yeon\kim-jae-yeon.html" /Y
copy "na-kyung-won.html" "na-kyung-won\na-kyung-won.html" /Y
copy "yang-hyang-ja.html" "yang-hyang-ja\yang-hyang-ja.html" /Y
copy "yoo-jeong-bok.html" "yoo-jeong-bok\yoo-jeong-bok.html" /Y
copy "lee-cheol-woo.html" "lee-cheol-woo\lee-cheol-woo.html" /Y
copy "lee-jun-seok.html" "lee-jun-seok\lee-jun-seok.html" /Y
copy "jeon-kwang-hoon.html" "jeon-kwang-hoon\jeon-kwang-hoon.html" /Y
copy "han-dong-hoon.html" "han-dong-hoon\han-dong-hoon.html" /Y
copy "han-sang-gyun.html" "han-sang-gyun\han-sang-gyun.html" /Y
copy "hong-joon-pyo.html" "hong-joon-pyo\hong-joon-pyo.html" /Y
copy "hwang-kyo-ahn.html" "hwang-kyo-ahn\hwang-kyo-ahn.html" /Y

echo 작업이 완료되었습니다.
pause
