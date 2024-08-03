export type CategoryType = {
  name: string;
  image?: string;
  handle: string;
};

export type ProductVariations = {
  id: string;
  [key: string]: string;
};

export type ProductType = {
  id: string;
  name: string;
  code: string;
  image: string[];
  handle: string;
  collections?: string[];
  priceSale?: number;
  priceOriginal: number;
  currency: string;
  language: string;
  quantity: number;
  options?: string[];
  variations?: ProductVariations[];
};
