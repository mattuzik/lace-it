export interface cartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  selectedSize: number | null;
  count: number;
}