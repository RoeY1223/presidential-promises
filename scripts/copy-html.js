// 스크립트: 한글 폴더의 HTML 파일을 영문 슬러그 폴더에 복사
const fs = require("fs");
const path = require("path");
const candidates =
  require("../js/candidates.js").candidates || require("../js/candidates.js");

const CANDIDATES_DIR = path.join(__dirname, "..", "candidates");

candidates.forEach((candidate) => {
  const korDir = path.join(CANDIDATES_DIR, candidate.name);
  const engDir = path.join(CANDIDATES_DIR, candidate.slug);
  if (fs.existsSync(korDir) && fs.existsSync(engDir)) {
    fs.readdirSync(korDir).forEach((file) => {
      const srcPath = path.join(korDir, file);
      const destPath = path.join(engDir, file);
      if (fs.statSync(srcPath).isFile()) {
        fs.copyFileSync(srcPath, destPath);
        console.log(
          `Copied: ${file} → ${path.relative(CANDIDATES_DIR, engDir)}`
        );
      }
    });
  } else {
    console.warn(`폴더 누락: ${candidate.name} 또는 ${candidate.slug}`);
  }
});
