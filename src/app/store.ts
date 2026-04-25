import { configureStore } from '@reduxjs/toolkit'
import { sneakerApi } from '@/entities/sneakers';
import { cartReducer } from '@/entities/cart';
import { cartListener } from '@/entities/cart';
import { favouritesReducer } from '@/features/toggle-favorite';

export const store = configureStore({reducer: {
    [sneakerApi.reducerPath]: sneakerApi.reducer,
    cart: cartReducer,
    favorites: favouritesReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(sneakerApi.middleware)
      .prepend(cartListener.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
