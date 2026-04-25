import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotalPrice,
  type StateWithCart,
} from './selectors';

export function useCartTotalPrice() {
  return useSelector<StateWithCart, number>(selectCartTotalPrice);
}

export function useCartItems() {
  return useSelector<StateWithCart, ReturnType<typeof selectCartItems>>(
    selectCartItems,
  );
}
