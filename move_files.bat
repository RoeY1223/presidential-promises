@echo off
REM 이 배치 파일은 한글 HTML 파일을 영문 폴더로 이동시키는 작업을 수행합니다.

REM 작업 디렉토리 설정
cd /d "C:\Users\R\OneDrive\Desktop\presidential-promises\presidential-promises\candidates"

echo 파일 이동 작업을 시작합니다...

REM 1. 한글 HTML 파일을 영문 폴더로 이동
REM 강성희.html -> kang-sung-hee/kang-sung-hee.html
if exist "강성희.html" (
  if exist "kang-sung-hee" (
    copy "강성희.html" "kang-sung-hee\kang-sung-hee.html" /Y
  ) else (
    mkdir "kang-sung-hee"
    copy "강성희.html" "kang-sung-hee\kang-sung-hee.html" /Y
  )
)

REM 권영국.html -> kwon-young-gook/kwon-young-gook.html
if exist "권영국.html" (
  if exist "kwon-young-gook" (
    copy "권영국.html" "kwon-young-gook\kwon-young-gook.html" /Y
  ) else (
    mkdir "kwon-young-gook"
    copy "권영국.html" "kwon-young-gook\kwon-young-gook.html" /Y
  )
)

REM 김경수.html -> kim-kyung-soo/kim-kyung-soo.html
if exist "김경수.html" (
  if exist "kim-kyung-soo" (
    copy "김경수.html" "kim-kyung-soo\kim-kyung-soo.html" /Y
  ) else (
    mkdir "kim-kyung-soo"
    copy "김경수.html" "kim-kyung-soo\kim-kyung-soo.html" /Y
  )
)

REM 김동연.html -> kim-dong-yeon/kim-dong-yeon.html
if exist "김동연.html" (
  if exist "kim-dong-yeon" (
    copy "김동연.html" "kim-dong-yeon\kim-dong-yeon.html" /Y
  ) else (
    mkdir "kim-dong-yeon"
    copy "김동연.html" "kim-dong-yeon\kim-dong-yeon.html" /Y
  )
)

REM 김문수.html -> kim-moon-soo/kim-moon-soo.html
if exist "김문수.html" (
  if exist "kim-moon-soo" (
    copy "김문수.html" "kim-moon-soo\kim-moon-soo.html" /Y
  ) else (
    mkdir "kim-moon-soo"
    copy "김문수.html" "kim-moon-soo\kim-moon-soo.html" /Y
  )
)

REM 김재연.html -> kim-jae-yeon/kim-jae-yeon.html
if exist "김재연.html" (
  if exist "kim-jae-yeon" (
    copy "김재연.html" "kim-jae-yeon\kim-jae-yeon.html" /Y
  ) else (
    mkdir "kim-jae-yeon"
    copy "김재연.html" "kim-jae-yeon\kim-jae-yeon.html" /Y
  )
)

REM 나경원.html -> na-kyung-won/na-kyung-won.html
if exist "나경원.html" (
  if exist "na-kyung-won" (
    copy "나경원.html" "na-kyung-won\na-kyung-won.html" /Y
  ) else (
    mkdir "na-kyung-won"
    copy "나경원.html" "na-kyung-won\na-kyung-won.html" /Y
  )
)

REM 안철수.html -> ahn-cheol-soo/ahn-cheol-soo.html
if exist "안철수.html" (
  if exist "ahn-cheol-soo" (
    copy "안철수.html" "ahn-cheol-soo\ahn-cheol-soo.html" /Y
  ) else (
    mkdir "ahn-cheol-soo"
    copy "안철수.html" "ahn-cheol-soo\ahn-cheol-soo.html" /Y
  )
)

REM 양향자.html -> yang-hyang-ja/yang-hyang-ja.html
if exist "양향자.html" (
  if exist "yang-hyang-ja" (
    copy "양향자.html" "yang-hyang-ja\yang-hyang-ja.html" /Y
  ) else (
    mkdir "yang-hyang-ja"
    copy "양향자.html" "yang-hyang-ja\yang-hyang-ja.html" /Y
  )
)

REM 유정복.html -> yoo-jeong-bok/yoo-jeong-bok.html
if exist "유정복.html" (
  if exist "yoo-jeong-bok" (
    copy "유정복.html" "yoo-jeong-bok\yoo-jeong-bok.html" /Y
  ) else (
    mkdir "yoo-jeong-bok"
    copy "유정복.html" "yoo-jeong-bok\yoo-jeong-bok.html" /Y
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

REM 이준석.html -> lee-jun-seok/lee-jun-seok.html
if exist "이준석.html" (
  if exist "lee-jun-seok" (
    copy "이준석.html" "lee-jun-seok\lee-jun-seok.html" /Y
  ) else (
    mkdir "lee-jun-seok"
    copy "이준석.html" "lee-jun-seok\lee-jun-seok.html" /Y
  )
)

REM 이철우.html -> lee-cheol-woo/lee-cheol-woo.html
if exist "이철우.html" (
  if exist "lee-cheol-woo" (
    copy "이철우.html" "lee-cheol-woo\lee-cheol-woo.html" /Y
  ) else (
    mkdir "lee-cheol-woo"
    copy "이철우.html" "lee-cheol-woo\lee-cheol-woo.html" /Y
  )
)

REM 전광훈.html -> jeon-kwang-hoon/jeon-kwang-hoon.html
if exist "전광훈.html" (
  if exist "jeon-kwang-hoon" (
    copy "전광훈.html" "jeon-kwang-hoon\jeon-kwang-hoon.html" /Y
  ) else (
    mkdir "jeon-kwang-hoon"
    copy "전광훈.html" "jeon-kwang-hoon\jeon-kwang-hoon.html" /Y
  )
)

REM 한동훈.html -> han-dong-hoon/han-dong-hoon.html
if exist "한동훈.html" (
  if exist "han-dong-hoon" (
    copy "한동훈.html" "han-dong-hoon\han-dong-hoon.html" /Y
  ) else (
    mkdir "han-dong-hoon"
    copy "한동훈.html" "han-dong-hoon\han-dong-hoon.html" /Y
  )
)

REM 한상균.html -> han-sang-gyun/han-sang-gyun.html
if exist "한상균.html" (
  if exist "han-sang-gyun" (
    copy "한상균.html" "han-sang-gyun\han-sang-gyun.html" /Y
  ) else (
    mkdir "han-sang-gyun"
    copy "한상균.html" "han-sang-gyun\han-sang-gyun.html" /Y
  )
)

REM 홍준표.html -> hong-joon-pyo/hong-joon-pyo.html
if exist "홍준표.html" (
  if exist "hong-joon-pyo" (
    copy "홍준표.html" "hong-joon-pyo\hong-joon-pyo.html" /Y
  ) else (
    mkdir "hong-joon-pyo"
    copy "홍준표.html" "hong-joon-pyo\hong-joon-pyo.html" /Y
  )
)

REM 황교안.html -> hwang-kyo-ahn/hwang-kyo-ahn.html
if exist "황교안.html" (
  if exist "hwang-kyo-ahn" (
    copy "황교안.html" "hwang-kyo-ahn\hwang-kyo-ahn.html" /Y
  ) else (
    mkdir "hwang-kyo-ahn"
    copy "황교안.html" "hwang-kyo-ahn\hwang-kyo-ahn.html" /Y
  )
)

echo 한글 폴더 삭제 중...

REM 2. 빈 한글 폴더 삭제
rmdir "강성희" 2>nul
rmdir "권영국" 2>nul
rmdir "김경수" 2>nul
rmdir "김동연" 2>nul
rmdir "김문수" 2>nul
rmdir "김재연" 2>nul
rmdir "나경원" 2>nul
rmdir "안철수" 2>nul
rmdir "양향자" 2>nul
rmdir "유정복" 2>nul
rmdir "이재명" 2>nul
rmdir "이준석" 2>nul
rmdir "이철우" 2>nul
rmdir "전광훈" 2>nul
rmdir "한동훈" 2>nul
rmdir "한상균" 2>nul
rmdir "홍준표" 2>nul
rmdir "황교안" 2>nul

echo 한글 HTML 파일 삭제 중...

REM 3. 한글 HTML 파일 삭제
del "강성희.html" 2>nul
del "권영국.html" 2>nul
del "김경수.html" 2>nul
del "김동연.html" 2>nul
del "김문수.html" 2>nul
del "김재연.html" 2>nul
del "나경원.html" 2>nul
del "안철수.html" 2>nul
del "양향자.html" 2>nul
del "유정복.html" 2>nul
del "이재명.html" 2>nul
del "이준석.html" 2>nul
del "이철우.html" 2>nul
del "전광훈.html" 2>nul
del "한동훈.html" 2>nul
del "한상균.html" 2>nul
del "홍준표.html" 2>nul
del "황교안.html" 2>nul

echo 작업이 완료되었습니다.
echo 최종 디렉토리 구조:
dir /B
pause
