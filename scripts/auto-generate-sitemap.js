/**
 * 자동 사이트맵 생성 스크립트
 * 이 스크립트는 프로젝트 디렉토리를 스캔하여 모든 HTML 파일을 찾고
 * 이를 기반으로 sitemap.xml 파일을 자동으로 생성합니다.
 * 
 * 정기적으로 실행되어 사이트맵을 최신 상태로 유지합니다.
 * 
 * 사용법: node auto-generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// 기본 URL 설정
const BASE_URL = 'https://2025년대통령공약.kr';

// HTML 파일을 찾기 위한 디렉토리 설정
const ROOT_DIR = path.resolve(__dirname, '..');
const CANDIDATES_DIR = path.join(ROOT_DIR, 'candidates');

// 결과를 저장할 URL 배열
let urls = [];

/**
 * 디렉토리를 재귀적으로 스캔하여 모든 HTML 파일을 찾습니다.
 * @param {string} dir - 검색할 디렉토리 경로
 * @param {string} baseUrl - 기본 URL
 * @param {string} relativePath - 기본 경로에 대한 상대 경로
 */
function scanDirectory(dir, baseUrl, relativePath = '') {
  // 디렉토리 내용 읽기
  const files = fs.readdirSync(dir);
  
  // 각 파일 및 디렉토리 처리
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // 디렉토리인 경우 재귀적으로 처리
    if (stat.isDirectory()) {
      const newRelativePath = path.join(relativePath, file);
      scanDirectory(filePath, baseUrl, newRelativePath);
    } 
    // HTML 파일인 경우 URL 추가
    else if (file.endsWith('.html')) {
      const fileRelativePath = path.join(relativePath, file);
      // URL에 사용할 상대 경로 (Windows 백슬래시를 슬래시로 변환)
      const urlPath = fileRelativePath.replace(/\\/g, '/');
      
      // 최종 URL 생성 및 배열에 추가
      const url = `${baseUrl}/${urlPath}`;
      urls.push(url);
    }
  }
}

/**
 * XML 사이트맵 생성
 * @param {Array<string>} urls - URL 목록
 * @returns {string} - XML 형식의 사이트맵
 */
function generateSitemapXml(urls) {
  const header = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const footer = '</urlset>';
  
  // 각 URL을 XML 형식으로 변환
  const urlXml = urls.map(url => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n');
  
  return `${header}\n${urlXml}\n${footer}`;
}

/**
 * 메인 함수
 */
function main() {
  try {
    console.log('사이트맵 생성 시작...');
    
    // 루트 디렉토리 처리 (index.html 등)
    scanDirectory(ROOT_DIR, BASE_URL);
    
    // 후보자 디렉토리 처리
    if (fs.existsSync(CANDIDATES_DIR)) {
      scanDirectory(CANDIDATES_DIR, BASE_URL, 'candidates');
    }
    
    // 중복 URL 제거 및 정렬
    urls = [...new Set(urls)].sort();
    
    // 루트의 index.html을 추가 (없는 경우)
    const rootUrl = `${BASE_URL}/`;
    if (!urls.includes(rootUrl)) {
      urls.unshift(rootUrl);
    }
    
    // sitemap.xml 생성
    const sitemapXml = generateSitemapXml(urls);
    const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
    
    // 파일 쓰기
    fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
    
    console.log(`✓ 사이트맵 생성 완료: ${urls.length}개 URL 처리됨`);
    console.log(`✓ 파일 저장 위치: ${sitemapPath}`);
    
  } catch (error) {
    console.error('사이트맵 생성 중 오류 발생:', error);
    process.exit(1);
  }
}

// 스크립트 실행
main();
