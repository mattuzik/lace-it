import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getStorageItem, setStorageItem} from '@/shared/lib/browser/storage';

interface FavoritesState {
  items: Record<number, boolean>;
}

const initialState: FavoritesState = { 
  items: getStorageItem<Record<number, boolean>>('favourites', {})
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.items[id]) delete state.items[id];
      else state.items[id] = true

      setStorageItem('favourites', state.items)
    },
  },
});

export const { toggle } = favoritesSlice.actions;
export default favoritesSlice.reducer