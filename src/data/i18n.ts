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
  photoNote: {
    ko: '상품 사진은 자리표시용 예시입니다. 실제 제품 사진으로 교체 예정입니다.',
    en: 'Product photos are placeholders and will be replaced with real product shots.',
    ja: '商品写真は仮のものです。実際の製品写真に差し替えます。',
  },
  checkoutNote: {
    ko: '결제는 외부 결제 페이지에서 진행됩니다. 이 사이트는 카드 정보를 받지 않습니다.',
    en: 'Checkout happens on an external payment page. This site never handles card details.',
    ja: '決済は外部の決済ページで行われます。当サイトはカード情報を扱いません。',
  },
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
