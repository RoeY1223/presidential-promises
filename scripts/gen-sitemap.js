const fs = require("fs");
const candidates = require("../js/candidates"); // 변환된 candidates 배열

const base = "https://2025년대통령공약.kr";
let urls = [`${base}/`];

// 후보자 상세 + 세부공약 URL 추가
candidates.forEach((c) => {
  const cUrl = `${base}/candidates/${c.slug}.html`;
  urls.push(cUrl);
  c.promises.forEach((p) => {
    urls.push(`${base}/candidates/${c.slug}/${p.slug}.html`);
  });
});

// sitemap.xml 작성
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((u) => `  <url><loc>${u}</loc></url>`),
  "</urlset>",
].join("\n");

fs.writeFileSync("sitemap.xml", xml);
console.log(`✔︎ sitemap.xml generated: ${urls.length} URLs`);
