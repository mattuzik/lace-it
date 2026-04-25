import favouritesReducer from "./model/favouriteSlice"
export * from './model/favouriteSlice'
export { ToggleFavoriteButton } from './ui/ToggleFavoriteButton'
export { favouritesReducer }

export {
  selectFavoritesIds,
  isProductFavorite
} from './model/selectors'
