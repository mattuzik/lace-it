import { createSlice } from '@reduxjs/toolkit'
import { getStorageItem } from '@/shared/lib/browser/storage';
import calcTotal from '@/shared/lib/utils/calcTotal';
import type { cartItem } from '@/shared/types/cartTypes'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { 
    items: getStorageItem<cartItem[]>('cart_items', []) as cartItem[],
    totalPrice: (getStorageItem<number>('cart_total', 0) || 0) as number
  },
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id && obj.selectedSize === action.payload.selectedSize)
      
      if (findItem) {
        if (findItem.count < 9) findItem.count++ 
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }

      state.totalPrice = calcTotal(state.items)
    },

    minusItem: (state, action) => {
      const findItem = state.items.find((obj) => 
        obj.id === action.payload.id && obj.selectedSize === action.payload.selectedSize
      )

      if (findItem) {
        findItem.count--
        if (findItem.count === 0) {
          state.items = state.items.filter(item => item !== findItem)
        }
      }
      state.totalPrice = calcTotal(state.items)
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => 
        !(item.id === action.payload.id && item.selectedSize === action.payload.selectedSize)
      )

      state.totalPrice = calcTotal(state.items)
    },

    cleanItems: (state) => {
      state.items = []
      state.totalPrice = 0
    },
  },
});


export const { addItem, removeItem, minusItem, cleanItems } = counterSlice.actions;
export default counterSlice.reducer;
