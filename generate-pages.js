// 정적 페이지 생성기 for 21대 대통령 공약 요약 사이트
const fs = require("fs");
const path = require("path");

// 베이스 URL 설정
const BASE_URL = "https://2025년대통령공약.kr";

// 후보자 데이터는 js/candidates.js 모듈에서 불러옵니다.
const candidates = require("./js/candidates.js");

const OUTPUT_DIR = path.join(__dirname, "candidates");
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

// 정적 페이지 생성을 위해 슬러그 생성 함수 추가
function slugify(text) {
  return (
    text
      .toString()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-")
      // 문자(한글 포함) 및 숫자, 하이픈만 허용
      .replace(/[^ -\p{L}\p{N}-]+/gu, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "")
  );
}

function generateCandidatePage(candidate) {
  const slug = slugify(candidate.name);
  const filePath = path.join(OUTPUT_DIR, `${slug}.html`);
  const title = `${candidate.name} 공약 | 21대 대통령 공약 요약집`;
  const description = `${candidate.name} 후보의 주요 공약을 확인하세요.`;
  const meta = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="../${candidate.image}" />
    <meta property="og:url" content="${BASE_URL}/candidates/${slug}.html" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="../${candidate.image}" />
    <script type="application/ld+json">
      ${JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: candidate.name,
          image: candidate.image,
          jobTitle: candidate.position,
          worksFor: {
            "@type": "Organization",
            name: "21대 대통령 공약 요약집",
          },
        },
        null,
        2
      )}
    </script>
  `;

  // 수정: promises는 객체 배열이며 각 객체에 title과 slug 속성이 있음
  const promisesList = candidate.promises
    .map((promise) => {
      // 각 공약의 slug 사용
      return `      <li><a href="./${slug}/${promise.slug}.html">${promise.title}</a></li>`;
    })
    .join("\n");

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>${meta}
</head>
<body>
  <a href="../index.html">← 후보자 리스트</a>
  <h1>${candidate.name} 공약</h1>
  <h2>${candidate.party} · ${candidate.position}</h2>
  <img src="../${candidate.image}" alt="${candidate.name} 후보 사진" />
  <section id="section-promises">
    <h3>주요 공약</h3>
    <ul>
${promisesList}
    </ul>
  </section>
</body>
</html>`;
  fs.writeFileSync(filePath, html, "utf8");
  return filePath;
}

function generatePromisePage(candidate, promise) {
  const cSlug = slugify(candidate.name);
  const dir = path.join(OUTPUT_DIR, cSlug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  // 수정: promise는 객체이므로 promise.slug와 promise.title을 사용
  const pSlug = promise.slug;
  const promiseTitle = promise.title;

  const filePath = path.join(dir, `${pSlug}.html`);
  const title = `${promiseTitle} | ${candidate.name} 공약`;
  const description = promiseTitle;

  const meta = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${BASE_URL}/candidates/${cSlug}/${pSlug}.html" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <script type="application/ld+json">
      ${JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          headline: promiseTitle,
          description: promiseTitle,
          author: { "@type": "Person", name: candidate.name },
        },
        null,
        2
      )}
    </script>
  `;
  const html = `<!DOCTYPE html>
<html lang="ko">
<head>${meta}
</head>
<body>
  <nav>
    <a href="../../index.html">← 후보자 리스트</a> /
    <a href="../${cSlug}.html">${candidate.name} 공약</a> /
    ${promiseTitle}
  </nav>
  <h1>${promiseTitle}</h1>
  <p>${promiseTitle}</p>
  <footer><small>출처: ${candidate.name}</small></footer>
</body>
</html>`;
  fs.writeFileSync(filePath, html, "utf8");
  return filePath;
}

// 생성 시작
let generatedFiles = [];
for (const candidate of candidates) {
  // 후보자 페이지 생성
  generatedFiles.push(generateCandidatePage(candidate));

  // 공약별 페이지 생성 - 수정: 각 promise 객체를 직접 전달
  for (const promise of candidate.promises) {
    generatedFiles.push(generatePromisePage(candidate, promise));
  }
}

console.log("Generated files:");
generatedFiles.forEach((f) => console.log(f));
