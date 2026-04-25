import { useSelector } from 'react-redux';
import { selectFavoritesIds } from "@/features/toggle-favorite";
import { useGetSneakersQuery } from '@/entities/sneakers';
import { SneakerCard } from '@/entities/sneakers';
import styles from './Favorites.module.scss'

const Favourites = () => {
  const favoriteIds = useSelector(selectFavoritesIds);
  const { data: allSneakers = [], isLoading } = useGetSneakersQuery({});

  const favoriteProducts = allSneakers.filter(item => favoriteIds.includes(Number(item.id)))

  if (isLoading) return <div>Загрузка...</div>;

  if (favoriteProducts.length === 0) return <main className={`container ${styles.empty}`}><h3>Вы пока что ничего не добавили в избранное</h3></main>;

  return (
    <main className="container">
      <h2>Закладки</h2>
      <div className="grid">
        {favoriteProducts.map((item) => {
          return <SneakerCard data={item} key={item.id}/>
        })}
      </div>
    </main>
  )
}

export default Favourites