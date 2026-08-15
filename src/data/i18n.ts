export const LOCALES = ['ko', 'en', 'ja'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Price is shown in the currency that matches the locale. */
export const CURRENCY: Record<Locale, 'KRW' | 'USD' | 'JPY'> = {
  ko: 'KRW',
  en: 'USD',
  ja: 'JPY',
};

export const T = {
  tagline: {
    ko: '하이퍼 엔지니어링 그룹 굿즈',
    en: 'Hyper Engineering Group goods',
    ja: 'Hyper Engineering Group グッズ',
  },
  buy: { ko: '구매하기', en: 'Buy', ja: '購入する' },
  soon: { ko: '준비 중', en: 'Coming soon', ja: '準備中' },
  preorder: { ko: '선주문', en: 'Pre-order', ja: '予約' },
  shipping: {
    ko: '한국·미국·일본 배송',
    en: 'Ships to Korea, the US and Japan',
    ja: '韓国・アメリカ・日本へ発送',
  },
  view: { ko: '자세히 보기', en: 'View', ja: '詳しく見る' },
  back: { ko: '← 스토어로', en: '← Back to store', ja: '← ストアへ' },
  details: { ko: '상품 정보', en: 'Product details', ja: '商品情報' },
  optionsLabel: { ko: '옵션', en: 'Options', ja: 'オプション' },
  madeToOrder: {
    ko: '재고를 쌓아두지 않습니다. 주문이 들어오면 그때 제작해서 보냅니다.',
    en: 'We hold no stock. Each item is produced after you order, then shipped.',
    ja: '在庫は持ちません。ご注文後に製作して発送します。',
  },
  preorderTerms: {
    ko: '선주문 조건',
    en: 'Pre-order terms',
    ja: '予約条件',
  },
  moqNote: {
    ko: '최소 제작 수량에 도달해야 생산에 들어갑니다. 마감일까지 수량이 모이지 않으면 결제 금액 전액을 환불합니다. 부분 제작이나 대체 상품 발송은 하지 않습니다.',
    en: 'Production starts only when the minimum order quantity is reached. If it is not reached by the deadline, every payment is refunded in full. We do not part-produce or substitute another item.',
    ja: '最低製作数量に達した場合のみ生産を開始します。締切までに達しない場合は全額を返金します。一部生産や代替品の発送は行いません。',
  },
  moqCount: { ko: '최소 수량', en: 'Minimum quantity', ja: '最低数量' },
  units: { ko: '개', en: 'units', ja: '個' },
} as const;

export type Dict = keyof typeof T;

export function t(key: Dict, locale: Locale): string {
  return T[key][locale];
}

export function formatPrice(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'ko' ? 'ko-KR' : locale === 'ja' ? 'ja-JP' : 'en-US', {
    style: 'currency',
    currency: CURRENCY[locale],
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Build a locale-aware absolute path. `slug` never starts with a slash. */
export function localePath(locale: Locale, slug = ''): string {
  const base = locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
  return base + slug;
}
