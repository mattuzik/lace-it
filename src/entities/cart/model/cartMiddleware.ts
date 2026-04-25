import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { setStorageItem } from '@/shared/lib/browser/storage';
import type { cartItem } from '@/shared/types/cartTypes';
import { addItem, removeItem, minusItem, cleanItems } from './cartSlice';

type CartMiddlewareState = {
  cart: {
    items: cartItem[];
    totalPrice: number;
  };
};

export const cartListener = createListenerMiddleware<CartMiddlewareState>();

cartListener.startListening({
  matcher: isAnyOf(addItem, removeItem, minusItem, cleanItems),
  effect: (_, listenerApi) => {
    const state = listenerApi.getState();
    setStorageItem('cart_items', state.cart.items);
    setStorageItem('cart_total', state.cart.totalPrice);
  },
});
