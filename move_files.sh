#!/bin/bash
# 이 스크립트는 한글 HTML 파일을 영문 폴더로 이동시키는 작업을 수행합니다.

# 작업 디렉토리 설정
cd "C:\Users\R\OneDrive\Desktop\presidential-promises\presidential-promises\candidates"

# 1. 한글 HTML 파일을 영문 폴더로 이동
# 강성희.html -> kang-sung-hee/kang-sung-hee.html
if [ -f "강성희.html" ]; then
  if [ -d "kang-sung-hee" ]; then
    # 대상 폴더가 존재하면 파일 복사
    cp "강성희.html" "kang-sung-hee/kang-sung-hee.html"
  else
    # 대상 폴더가 없으면 생성 후 파일 복사
    mkdir -p "kang-sung-hee"
    cp "강성희.html" "kang-sung-hee/kang-sung-hee.html"
  fi
fi

# 권영국.html -> kwon-young-gook/kwon-young-gook.html
if [ -f "권영국.html" ]; then
  if [ -d "kwon-young-gook" ]; then
    cp "권영국.html" "kwon-young-gook/kwon-young-gook.html"
  else
    mkdir -p "kwon-young-gook"
    cp "권영국.html" "kwon-young-gook/kwon-young-gook.html"
  fi
fi

# 김경수.html -> kim-kyung-soo/kim-kyung-soo.html
if [ -f "김경수.html" ]; then
  if [ -d "kim-kyung-soo" ]; then
    cp "김경수.html" "kim-kyung-soo/kim-kyung-soo.html"
  else
    mkdir -p "kim-kyung-soo"
    cp "김경수.html" "kim-kyung-soo/kim-kyung-soo.html"
  fi
fi

# 김동연.html -> kim-dong-yeon/kim-dong-yeon.html
if [ -f "김동연.html" ]; then
  if [ -d "kim-dong-yeon" ]; then
    cp "김동연.html" "kim-dong-yeon/kim-dong-yeon.html"
  else
    mkdir -p "kim-dong-yeon"
    cp "김동연.html" "kim-dong-yeon/kim-dong-yeon.html"
  fi
fi

# 김문수.html -> kim-moon-soo/kim-moon-soo.html
if [ -f "김문수.html" ]; then
  if [ -d "kim-moon-soo" ]; then
    cp "김문수.html" "kim-moon-soo/kim-moon-soo.html"
  else
    mkdir -p "kim-moon-soo"
    cp "김문수.html" "kim-moon-soo/kim-moon-soo.html"
  fi
fi

# 김재연.html -> kim-jae-yeon/kim-jae-yeon.html
if [ -f "김재연.html" ]; then
  if [ -d "kim-jae-yeon" ]; then
    cp "김재연.html" "kim-jae-yeon/kim-jae-yeon.html"
  else
    mkdir -p "kim-jae-yeon"
    cp "김재연.html" "kim-jae-yeon/kim-jae-yeon.html"
  fi
fi

# 나경원.html -> na-kyung-won/na-kyung-won.html
if [ -f "나경원.html" ]; then
  if [ -d "na-kyung-won" ]; then
    cp "나경원.html" "na-kyung-won/na-kyung-won.html"
  else
    mkdir -p "na-kyung-won"
    cp "나경원.html" "na-kyung-won/na-kyung-won.html"
  fi
fi

# 안철수.html -> ahn-cheol-soo/ahn-cheol-soo.html
if [ -f "안철수.html" ]; then
  if [ -d "ahn-cheol-soo" ]; then
    cp "안철수.html" "ahn-cheol-soo/ahn-cheol-soo.html"
  else
    mkdir -p "ahn-cheol-soo"
    cp "안철수.html" "ahn-cheol-soo/ahn-cheol-soo.html"
  fi
fi

# 양향자.html -> yang-hyang-ja/yang-hyang-ja.html
if [ -f "양향자.html" ]; then
  if [ -d "yang-hyang-ja" ]; then
    cp "양향자.html" "yang-hyang-ja/yang-hyang-ja.html"
  else
    mkdir -p "yang-hyang-ja"
    cp "양향자.html" "yang-hyang-ja/yang-hyang-ja.html"
  fi
fi

# 유정복.html -> yoo-jeong-bok/yoo-jeong-bok.html
if [ -f "유정복.html" ]; then
  if [ -d "yoo-jeong-bok" ]; then
    cp "유정복.html" "yoo-jeong-bok/yoo-jeong-bok.html"
  else
    mkdir -p "yoo-jeong-bok"
    cp "유정복.html" "yoo-jeong-bok/yoo-jeong-bok.html"
  fi
fi

# 이재명.html -> lee-jae-myung/lee-jae-myung.html
if [ -f "이재명.html" ]; then
  if [ -d "lee-jae-myung" ]; then
    cp "이재명.html" "lee-jae-myung/lee-jae-myung.html"
  else
    mkdir -p "lee-jae-myung"
    cp "이재명.html" "lee-jae-myung/lee-jae-myung.html"
  fi
fi

# 이준석.html -> lee-jun-seok/lee-jun-seok.html
if [ -f "이준석.html" ]; then
  if [ -d "lee-jun-seok" ]; then
    cp "이준석.html" "lee-jun-seok/lee-jun-seok.html"
  else
    mkdir -p "lee-jun-seok"
    cp "이준석.html" "lee-jun-seok/lee-jun-seok.html"
  fi
fi

# 이철우.html -> lee-cheol-woo/lee-cheol-woo.html
if [ -f "이철우.html" ]; then
  if [ -d "lee-cheol-woo" ]; then
    cp "이철우.html" "lee-cheol-woo/lee-cheol-woo.html"
  else
    mkdir -p "lee-cheol-woo"
    cp "이철우.html" "lee-cheol-woo/lee-cheol-woo.html"
  fi
fi

# 전광훈.html -> jeon-kwang-hoon/jeon-kwang-hoon.html
if [ -f "전광훈.html" ]; then
  if [ -d "jeon-kwang-hoon" ]; then
    cp "전광훈.html" "jeon-kwang-hoon/jeon-kwang-hoon.html"
  else
    mkdir -p "jeon-kwang-hoon"
    cp "전광훈.html" "jeon-kwang-hoon/jeon-kwang-hoon.html"
  fi
fi

# 한동훈.html -> han-dong-hoon/han-dong-hoon.html
if [ -f "한동훈.html" ]; then
  if [ -d "han-dong-hoon" ]; then
    cp "한동훈.html" "han-dong-hoon/han-dong-hoon.html"
  else
    mkdir -p "han-dong-hoon"
    cp "한동훈.html" "han-dong-hoon/han-dong-hoon.html"
  fi
fi

# 한상균.html -> han-sang-gyun/han-sang-gyun.html
if [ -f "한상균.html" ]; then
  if [ -d "han-sang-gyun" ]; then
    cp "한상균.html" "han-sang-gyun/han-sang-gyun.html"
  else
    mkdir -p "han-sang-gyun"
    cp "한상균.html" "han-sang-gyun/han-sang-gyun.html"
  fi
fi

# 홍준표.html -> hong-joon-pyo/hong-joon-pyo.html
if [ -f "홍준표.html" ]; then
  if [ -d "hong-joon-pyo" ]; then
    cp "홍준표.html" "hong-joon-pyo/hong-joon-pyo.html"
  else
    mkdir -p "hong-joon-pyo"
    cp "홍준표.html" "hong-joon-pyo/hong-joon-pyo.html"
  fi
fi

# 황교안.html -> hwang-kyo-ahn/hwang-kyo-ahn.html
if [ -f "황교안.html" ]; then
  if [ -d "hwang-kyo-ahn" ]; then
    cp "황교안.html" "hwang-kyo-ahn/hwang-kyo-ahn.html"
  else
    mkdir -p "hwang-kyo-ahn"
    cp "황교안.html" "hwang-kyo-ahn/hwang-kyo-ahn.html"
  fi
fi

# 2. 빈 한글 폴더 삭제
rmdir 강성희 2>/dev/null
rmdir 권영국 2>/dev/null
rmdir 김경수 2>/dev/null
rmdir 김동연 2>/dev/null
rmdir 김문수 2>/dev/null
rmdir 김재연 2>/dev/null
rmdir 나경원 2>/dev/null
rmdir 안철수 2>/dev/null
rmdir 양향자 2>/dev/null
rmdir 유정복 2>/dev/null
rmdir 이재명 2>/dev/null
rmdir 이준석 2>/dev/null
rmdir 이철우 2>/dev/null
rmdir 전광훈 2>/dev/null
rmdir 한동훈 2>/dev/null
rmdir 한상균 2>/dev/null
rmdir 홍준표 2>/dev/null
rmdir 황교안 2>/dev/null

# 3. 한글 HTML 파일 삭제
rm 강성희.html 2>/dev/null
rm 권영국.html 2>/dev/null
rm 김경수.html 2>/dev/null
rm 김동연.html 2>/dev/null
rm 김문수.html 2>/dev/null
rm 김재연.html 2>/dev/null
rm 나경원.html 2>/dev/null
rm 안철수.html 2>/dev/null
rm 양향자.html 2>/dev/null
rm 유정복.html 2>/dev/null
rm 이재명.html 2>/dev/null
rm 이준석.html 2>/dev/null
rm 이철우.html 2>/dev/null
rm 전광훈.html 2>/dev/null
rm 한동훈.html 2>/dev/null
rm 한상균.html 2>/dev/null
rm 홍준표.html 2>/dev/null
rm 황교안.html 2>/dev/null

# 4. 최종 점검 및 보고
echo "작업이 완료되었습니다."
echo "최종 디렉토리 구조:"
ls -la
