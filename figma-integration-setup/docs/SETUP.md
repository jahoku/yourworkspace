# Cursor Talk To Figma 환경 구축 가이드

## 1. WSL 설치 (Windows)
```bash
wsl --install
```

## 2. Bun 설치 (WSL에서)
```bash
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
```

## 3. 프로젝트 클론
```bash
cd ~
git clone https://github.com/figma/code-connect.git cursor-talk-to-figma-mcp
cd cursor-talk-to-figma-mcp
bun install
```

## 4. 설정 적용
- `src/socket.ts`에서 `hostname: "0.0.0.0"` 주석 해제
- `configs/mcp.json`을 `%USERPROFILE%\.cursor\mcp.json`에 복사

## 5. 실행
```bash
# 터미널 1: 소켓 서버
bun socket

# 터미널 2: MCP 서버  
bunx cursor-talk-to-figma-mcp
```

## 6. Figma 플러그인 연결
- Figma에서 플러그인 실행
- localhost:3055로 연결
- 채널 생성 후 Cursor에서 동일 채널로 연결