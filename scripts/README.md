# 사이트맵 자동 생성 시스템

이 디렉토리에는 웹사이트의 sitemap.xml 파일을 자동으로 생성하고 유지하는 스크립트가 포함되어 있습니다.

## 파일 설명

- `auto-generate-sitemap.js`: 사이트의 모든 HTML 파일을 스캔하여 sitemap.xml을 생성합니다.
- `schedule-sitemap-generator.js`: Node.js 기반 스케줄러로, 정기적으로 사이트맵을 업데이트합니다.
- `sitemap-service.sh`: Linux 시스템에서 사이트맵 생성기를 시스템 서비스로 설정합니다.
- `run-sitemap-generator.bat`: Windows에서 사이트맵 생성 스크립트를 직접 실행하는 배치 파일입니다.

## 사용 방법

### 수동 실행 (모든 플랫폼)

```bash
node auto-generate-sitemap.js
```

### Windows에서 자동 실행 설정

1. **작업 스케줄러 열기**:
   - `Win + R` 키를 누르고 `taskschd.msc`를 입력하여 작업 스케줄러를 엽니다.

2. **새 작업 만들기**:
   - 오른쪽 패널에서 "작업 만들기..."를 클릭합니다.
   - 이름을 "SitemapGenerator"로 지정합니다.
   - "가장 높은 권한으로 실행" 옵션을 선택합니다.

3. **트리거 설정**:
   - "트리거" 탭으로 이동하여 "새로 만들기" 클릭
   - "매일" 선택하고 원하는 시간 설정 (예: 오전 3시)
   - "확인" 클릭

4. **동작 설정**:
   - "동작" 탭으로 이동하여 "새로 만들기" 클릭
   - "프로그램 시작" 선택
   - "프로그램/스크립트" 필드에 `cmd.exe` 입력
   - "인수 추가" 필드에 다음 입력:
     ```
     /c "cd /d C:\Users\R\OneDrive\Desktop\presidential-promises\scripts && node auto-generate-sitemap.js"
     ```
   - 경로는 실제 설치 경로에 맞게 조정하세요
   - "확인" 클릭

5. **조건 및 설정**:
   - 필요에 따라 조건 및 추가 설정을 구성합니다.
   - "확인"을 클릭하여 작업을 저장합니다.

### Linux에서 서비스로 설정

서버가 Linux 기반인 경우, 다음 명령으로 시스템 서비스로 설정할 수 있습니다:

```bash
sudo bash sitemap-service.sh install
```

서비스 제거:
```bash
sudo bash sitemap-service.sh uninstall
```

### Node.js 스케줄러 사용 (모든 플랫폼)

PM2나 유사한 프로세스 관리자를 사용하여 스케줄러 스크립트를 실행할 수 있습니다:

```bash
npm install -g pm2
pm2 start schedule-sitemap-generator.js --name sitemap-generator
pm2 save
```

## 문제 해결

- **권한 문제**: 스크립트 실행 시 권한 오류가 발생하면 적절한 권한으로 실행하세요.
- **Node.js 버전**: Node.js v12 이상을 사용하는 것이 좋습니다.
- **경로 문제**: 스크립트에서 사용하는 경로가 올바른지 확인하세요.

## 사이트맵 형식

생성된 사이트맵은 표준 XML 형식을 따르며, 다음과 같은 구조를 가집니다:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://2025년대통령공약.kr/</loc>
  </url>
  <url>
    <loc>https://2025년대통령공약.kr/candidates/김동연.html</loc>
  </url>
  <!-- 추가 URL -->
</urlset>
```

This structure complies with the [Sitemaps XML format](https://www.sitemaps.org/protocol.html).
