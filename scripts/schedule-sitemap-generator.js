/**
 * 사이트맵 자동 생성 스케줄러
 * 이 스크립트는 특정 간격으로 사이트맵 생성 스크립트를 실행합니다.
 * 서버에 설치하여 주기적으로 사이트맵을 자동 업데이트할 수 있습니다.
 * 
 * 사용법: node schedule-sitemap-generator.js
 */

const { spawn } = require('child_process');
const path = require('path');

// 설정
const CONFIG = {
  // 업데이트 간격 (밀리초) - 기본값 1일
  updateInterval: 24 * 60 * 60 * 1000,
  // 사이트맵 생성 스크립트 경로
  scriptPath: path.join(__dirname, 'auto-generate-sitemap.js'),
};

/**
 * 사이트맵 생성 스크립트 실행
 */
function runSitemapGenerator() {
  console.log(`[${new Date().toISOString()}] 사이트맵 생성 시작...`);
  
  const process = spawn('node', [CONFIG.scriptPath]);
  
  process.stdout.on('data', (data) => {
    console.log(`${data}`);
  });
  
  process.stderr.on('data', (data) => {
    console.error(`오류: ${data}`);
  });
  
  process.on('close', (code) => {
    if (code === 0) {
      console.log(`[${new Date().toISOString()}] 사이트맵 생성 완료`);
    } else {
      console.error(`[${new Date().toISOString()}] 사이트맵 생성 실패 (코드: ${code})`);
    }
  });
}

/**
 * 메인 함수
 */
function main() {
  console.log('사이트맵 자동 생성 스케줄러 시작');
  console.log(`업데이트 간격: ${CONFIG.updateInterval / (60 * 60 * 1000)}시간`);
  
  // 시작시 즉시 실행
  runSitemapGenerator();
  
  // 주기적 실행 설정
  setInterval(runSitemapGenerator, CONFIG.updateInterval);
}

// 스크립트 실행
main();
