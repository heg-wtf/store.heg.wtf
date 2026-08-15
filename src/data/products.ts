import raw from './products.json';
import type { Locale } from './i18n';

export interface Product {
  id: string;
  /** pod = printed on demand after the order. preorder = MOQ-gated batch. */
  type: 'pod' | 'preorder';
  status: 'draft' | 'published';
  image: string | null;
  /** Attribution for a placeholder photo we do not own. Null once we shoot our own. */
  imageCredit: { author: string; license: string; source: string } | null;
  name: Record<Locale, string>;
  blurb: Record<Locale, string>;
  /** Paragraphs shown on the detail page. */
  description: Record<Locale, string[]>;
  price: { KRW: number; USD: number; JPY: number };
  options: string[];
  moq?: number;
  /** External hosted checkout. Null until a payment provider is wired up. */
  checkoutUrl: string | null;
}

const products = raw as Product[];

export function findProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function listProducts({ includeDrafts = false } = {}): Product[] {
  return includeDrafts ? products : products.filter((p) => p.status === 'published');
}
