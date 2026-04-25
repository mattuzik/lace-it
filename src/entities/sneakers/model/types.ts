export interface Sneaker {
  id: string;
  name: string;
  price: number;
  image: string;
  gender: 'mens' | 'womens';
  isNew: boolean;
  isSale: boolean;
  defaultPrice?: number | null;
}

export interface SneakerArrivals {
  items: Sneaker[]
}

export interface SneakerFilters {
  gender?: string;
  isSale?: boolean;
  isNew?: boolean;
  _limit?: number;
}

export interface SneakerParams {
  gender?: string;
  isNew?: boolean;
  isSale?: boolean;
  _limit?: number; 
  _page?: number;
  name?: string;
}
