#!/bin/bash
# 사이트맵 자동 생성을 위한 시스템 서비스 설정 스크립트
# 이 스크립트는 사이트맵 생성기를 systemd 서비스로 등록합니다.
# 사용법: sudo bash sitemap-service.sh install

# 실행 경로 설정
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
NODE_PATH=$(which node)

# 서비스 파일 내용
SERVICE_CONTENT="[Unit]
Description=Presidential Promises Sitemap Generator
After=network.target

[Service]
ExecStart=$NODE_PATH $SCRIPT_DIR/schedule-sitemap-generator.js
Restart=always
User=$(whoami)
Group=$(id -gn)
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
WorkingDirectory=$PROJECT_DIR

[Install]
WantedBy=multi-user.target"

# 서비스 설치 함수
install_service() {
    # 서비스 파일 생성
    echo "$SERVICE_CONTENT" | sudo tee /etc/systemd/system/sitemap-generator.service > /dev/null
    
    # systemd 리로드 및 서비스 활성화
    sudo systemctl daemon-reload
    sudo systemctl enable sitemap-generator
    sudo systemctl start sitemap-generator
    
    echo "서비스가 성공적으로 설치되었습니다."
    echo "상태 확인: sudo systemctl status sitemap-generator"
}

# 서비스 제거 함수
remove_service() {
    sudo systemctl stop sitemap-generator
    sudo systemctl disable sitemap-generator
    sudo rm /etc/systemd/system/sitemap-generator.service
    sudo systemctl daemon-reload
    
    echo "서비스가 제거되었습니다."
}

# 메인 로직
case "$1" in
    install)
        install_service
        ;;
    uninstall)
        remove_service
        ;;
    *)
        echo "사용법: $0 {install|uninstall}"
        exit 1
        ;;
esac

exit 0
