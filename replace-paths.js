const fs = require("fs");
const path = require("path");
const glob = require("glob");

// 한글 이름 → 영문 슬러그 매핑
const map = {
  김동연: "kim-dong-yeon",
  이재명: "lee-jae-myung",
  김경수: "kim-gyeong-su",
  이준석: "lee-jun-seok",
  안철수: "ahn-cheol-soo",
  김문수: "kim-moon-soo",
  한동훈: "han-dong-hoon",
  나경원: "na-kyung-won",
  홍준표: "hong-joon-pyo",
  유정복: "yoo-jung-bok",
  이철우: "lee-cheol-woo",
  양향자: "yang-hyang-ja",
  김재연: "kim-jae-yeon",
  강성희: "kang-seong-hee",
  권영국: "kwon-young-guk",
  한상균: "han-sang-gyun",
  황교안: "hwang-kyo-ahn",
  전광훈: "jeon-gwang-hoon",
};

// 치환할 파일 확장자 패턴
const patterns = [
  "./index.html",
  "./sitemap.xml",
  "./sitemap_index.xml",
  "./candidates/**/*.html",
];

patterns.forEach((pattern) => {
  glob(pattern, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      let content = fs.readFileSync(file, "utf8");
      // 매핑 하나씩 적용
      for (const [kor, eng] of Object.entries(map)) {
        // /candidates/김동연.html → /candidates/kim-dong-yeon.html
        const from1 = new RegExp(`(/candidates/)${kor}(\\.html)`, "g");
        content = content.replace(from1, `$1${eng}$2`);
        // /candidates/김동연/ → /candidates/kim-dong-yeon/
        const from2 = new RegExp(`(/candidates/)${kor}(/)`, "g");
        content = content.replace(from2, `$1${eng}$2`);
      }
      fs.writeFileSync(file, content, "utf8");
      console.log(`✔︎ Updated paths in ${file}`);
    });
  });
});
