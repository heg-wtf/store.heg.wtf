# store.heg.wtf

HEG 굿즈 스토어. 정적 사이트 + 외부 호스티드 결제.

## 원칙

- **결제는 우리 코드가 만지지 않는다.** 상품 카드의 구매 버튼은 외부 결제 페이지로 나가는 링크
  하나다. 카드 정보가 우리 서버를 지나가지 않으므로 PCI 범위 밖이다.
- **재고 0.** POD(주문 후 제작) 상품만 상시 판매하고, 키캡은 MOQ 게이트가 있는 선주문으로 분리한다.
- **상품 데이터는 `src/data/products.json` 하나가 원본이다.** `checkoutUrl` 이 `null` 이면
  버튼은 "준비 중" 상태로 렌더된다. 결제 수단이 정해지면 이 필드만 채우면 열린다.

## 스택

- Astro 5 (static output), TypeScript, 의존성 없는 순수 CSS
- 배포: Cloudflare Pages (build: `npm run build`, output: `dist`)
- 도메인: `store.heg.wtf`

## 개발

```
make install   # 의존성 설치
make server    # 로컬 개발 서버
make lint      # 포맷 검사 + astro check
make build     # 정적 빌드 (dist/)
```

## 다국어

`ko`(기본, `/`), `en`(`/en/`), `ja`(`/ja/`). 문구는 `src/data/i18n.ts`, 상품명·설명은
`products.json` 안에 로케일별로 들어간다. 가격은 로케일에 맞는 통화로 표시한다.

## 아직 안 정해진 것

- 결제 제공자 (호스티드 체크아웃 링크를 주고 한국 사업자에게 정산되는 곳)
- 로고·워드마크 벡터 (현재 `HEG Store` 텍스트 워드마크만 있음)
- 상품 이미지 (POD 목업 촬영/생성 전까지 `image: null`)
