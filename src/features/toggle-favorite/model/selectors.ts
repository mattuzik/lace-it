export interface FavoritesStateSchema {
  favorites: {
    items: Record<number, boolean>;
  };
}

export const isProductFavorite = (state: FavoritesStateSchema, id: number) => 
  !!state.favorites.items[id];

export const selectFavoritesIds = (state: FavoritesStateSchema) => {
  const items = state?.favorites?.items || {};
  return Object.keys(items).map(Number);
};
