import { useDispatch, useSelector } from 'react-redux';
import { isProductFavorite, type FavoritesStateSchema } from '../model/selectors';
import { toggle } from '../model/favouriteSlice';
import Button from '@/shared/ui/Button';

export const ToggleFavoriteButton = ({ productId }: { productId: number }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: FavoritesStateSchema) => isProductFavorite(state, productId));

  return (
    <Button onClick={() => dispatch(toggle(productId))}>
      {isFavorite ? '♥' : '♡'}
    </Button>
  )
}