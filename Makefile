.DEFAULT_GOAL := help
.PHONY: help install format lint build server preview clean

NPM ?= npm

help: ## 사용 가능한 타겟 출력
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

install: ## 의존성 설치
	$(NPM) install

format: ## prettier 포맷팅
	$(NPM) run format

lint: ## astro check (타입/템플릿 정적 분석) + 포맷 검사
	$(NPM) run format:check
	$(NPM) run check

build: lint ## 정적 사이트 빌드 (dist/)
	$(NPM) run build

server: ## 로컬 개발 서버 (hot-reload)
	$(NPM) run dev

preview: build ## 빌드 결과물 미리보기
	$(NPM) run preview

clean: ## 빌드 결과물 정리
	rm -rf dist .astro
