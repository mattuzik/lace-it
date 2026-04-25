import cartReducer from './cartSlice';

export type CartSliceState = ReturnType<typeof cartReducer>;

export type StateWithCart = {
  cart: CartSliceState;
};

export const selectCartTotalPrice = (state: StateWithCart) => state.cart.totalPrice;

export const selectCartItems = (state: StateWithCart) => state.cart.items;
