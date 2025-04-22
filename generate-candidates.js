// 후보자 데이터 변환 스크립트
const fs = require("fs");
const path = require("path");
const { slugify } = require("transliteration");

// 원본 candidates 모듈 불러오기
const candidates = require("./js/candidates.js");

// 변환 수행
const transformed = candidates.map((candidate) => {
  const slug = slugify(candidate.name).toLowerCase();
  // 이미지 경로를 slug 기반으로 통일
  // promises 객체 키-배열 → 배열 구조로 변환
  const promises = Object.entries(candidate.promises).flatMap(
    ([category, items]) =>
      items.map((title) => ({
        title,
        slug: slugify(title).toLowerCase(),
        description: "",
        source: "",
      }))
  );
  return {
    id: candidate.id,
    name: candidate.name,
    slug,
    party: candidate.party,
    position: candidate.position,
    image: `images/${slug}.jpg`,
    promises,
  };
});

// 출력 파일 생성
const output = `export const candidates = ${JSON.stringify(
  transformed,
  null,
  2
)};\n`;
fs.writeFileSync(
  path.join(__dirname, "candidates-transformed.js"),
  output,
  "utf8"
);
console.log("candidates-transformed.js 생성 완료");
