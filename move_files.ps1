# 이 PowerShell 스크립트는 한글 HTML 파일을 영문 폴더로 이동시키는 작업을 수행합니다.

# 작업 디렉토리 설정
Set-Location -Path "C:\Users\R\OneDrive\Desktop\presidential-promises\presidential-promises\candidates"

Write-Host "파일 이동 작업을 시작합니다..." -ForegroundColor Green

# 한글-영문 매핑 배열 생성
$mapping = @(
    @{KoreanFile = "강성희.html"; EnglishFolder = "kang-sung-hee"; EnglishFile = "kang-sung-hee.html"},
    @{KoreanFile = "권영국.html"; EnglishFolder = "kwon-young-gook"; EnglishFile = "kwon-young-gook.html"},
    @{KoreanFile = "김경수.html"; EnglishFolder = "kim-kyung-soo"; EnglishFile = "kim-kyung-soo.html"},
    @{KoreanFile = "김동연.html"; EnglishFolder = "kim-dong-yeon"; EnglishFile = "kim-dong-yeon.html"},
    @{KoreanFile = "김문수.html"; EnglishFolder = "kim-moon-soo"; EnglishFile = "kim-moon-soo.html"},
    @{KoreanFile = "김재연.html"; EnglishFolder = "kim-jae-yeon"; EnglishFile = "kim-jae-yeon.html"},
    @{KoreanFile = "나경원.html"; EnglishFolder = "na-kyung-won"; EnglishFile = "na-kyung-won.html"},
    @{KoreanFile = "안철수.html"; EnglishFolder = "ahn-cheol-soo"; EnglishFile = "ahn-cheol-soo.html"},
    @{KoreanFile = "양향자.html"; EnglishFolder = "yang-hyang-ja"; EnglishFile = "yang-hyang-ja.html"},
    @{KoreanFile = "유정복.html"; EnglishFolder = "yoo-jeong-bok"; EnglishFile = "yoo-jeong-bok.html"},
    @{KoreanFile = "이재명.html"; EnglishFolder = "lee-jae-myung"; EnglishFile = "lee-jae-myung.html"},
    @{KoreanFile = "이준석.html"; EnglishFolder = "lee-jun-seok"; EnglishFile = "lee-jun-seok.html"},
    @{KoreanFile = "이철우.html"; EnglishFolder = "lee-cheol-woo"; EnglishFile = "lee-cheol-woo.html"},
    @{KoreanFile = "전광훈.html"; EnglishFolder = "jeon-kwang-hoon"; EnglishFile = "jeon-kwang-hoon.html"},
    @{KoreanFile = "한동훈.html"; EnglishFolder = "han-dong-hoon"; EnglishFile = "han-dong-hoon.html"},
    @{KoreanFile = "한상균.html"; EnglishFolder = "han-sang-gyun"; EnglishFile = "han-sang-gyun.html"},
    @{KoreanFile = "홍준표.html"; EnglishFolder = "hong-joon-pyo"; EnglishFile = "hong-joon-pyo.html"},
    @{KoreanFile = "황교안.html"; EnglishFolder = "hwang-kyo-ahn"; EnglishFile = "hwang-kyo-ahn.html"}
)

# 1. 한글 HTML 파일을 영문 폴더로 이동
foreach ($item in $mapping) {
    if (Test-Path $item.KoreanFile) {
        Write-Host "처리 중: $($item.KoreanFile) -> $($item.EnglishFolder)\$($item.EnglishFile)" -ForegroundColor Cyan
        
        # 영문 폴더가 없으면 생성
        if (-not (Test-Path $item.EnglishFolder -PathType Container)) {
            New-Item -Path $item.EnglishFolder -ItemType Directory | Out-Null
            Write-Host "  폴더 생성: $($item.EnglishFolder)" -ForegroundColor Yellow
        }
        
        # 복사하기 전에 영문 HTML 파일이 이미 있는지 확인
        $targetPath = Join-Path -Path $item.EnglishFolder -ChildPath $item.EnglishFile
        if (Test-Path $targetPath) {
            Write-Host "  대상 파일이 이미 존재합니다. 중복 처리 중..." -ForegroundColor Yellow
            # 파일 내용이 동일한지 확인
            $sourceContent = Get-Content -Path $item.KoreanFile -Raw
            $targetContent = Get-Content -Path $targetPath -Raw
            
            if ($sourceContent -eq $targetContent) {
                Write-Host "  파일 내용이 동일합니다. 한글 파일만 삭제합니다." -ForegroundColor Yellow
            } else {
                Write-Host "  파일 내용이 다릅니다. 영문 파일을 유지합니다." -ForegroundColor Yellow
            }
        } else {
            # 대상 파일이 없으면 복사
            Copy-Item -Path $item.KoreanFile -Destination $targetPath
            Write-Host "  파일 복사 완료" -ForegroundColor Green
        }
    } else {
        Write-Host "파일을 찾을 수 없음: $($item.KoreanFile)" -ForegroundColor Red
    }
}

Write-Host "한글 폴더 삭제 중..." -ForegroundColor Green

# 2. 한글 폴더 삭제
$koreanFolders = @(
    "강성희", "권영국", "김경수", "김동연", "김문수", "김재연", "나경원", 
    "안철수", "양향자", "유정복", "이재명", "이준석", "이철우", "전광훈", 
    "한동훈", "한상균", "홍준표", "황교안"
)

foreach ($folder in $koreanFolders) {
    if (Test-Path $folder -PathType Container) {
        # 폴더가 비어 있는지 확인
        $isEmpty = (Get-ChildItem -Path $folder -Force | Measure-Object).Count -eq 0
        if ($isEmpty) {
            Remove-Item -Path $folder -Force
            Write-Host "  빈 폴더 삭제: $folder" -ForegroundColor Green
        } else {
            Write-Host "  폴더가 비어있지 않습니다: $folder - 삭제하지 않습니다" -ForegroundColor Yellow
        }
    }
}

Write-Host "한글 HTML 파일 삭제 중..." -ForegroundColor Green

# 3. 한글 HTML 파일 삭제
foreach ($item in $mapping) {
    if (Test-Path $item.KoreanFile) {
        Remove-Item -Path $item.KoreanFile -Force
        Write-Host "  파일 삭제: $($item.KoreanFile)" -ForegroundColor Green
    }
}

Write-Host "작업이 완료되었습니다." -ForegroundColor Green
Write-Host "최종 디렉토리 구조:" -ForegroundColor Green
Get-ChildItem -Directory | Select-Object Name

Write-Host "엔터 키를 누르면 종료합니다..." -ForegroundColor Cyan
Read-Host
