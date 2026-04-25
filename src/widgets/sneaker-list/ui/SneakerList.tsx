import { Dispatch, SetStateAction } from 'react';
import { SneakerCard, useGetSneakersQuery, SneakerParams } from '@/entities/sneakers';
import { SearchSneakers } from '@/features/search-sneakers';
import Loading from '@/shared/ui/Loading';
import styles from './SneakerList.module.scss';

interface Props {
  params?: SneakerParams;
  title?: string;
  searchQuery?: string;
  setSearchQuery?: Dispatch<SetStateAction<string>>;
}

export const SneakersList = ({ 
  params = {}, 
  title = 'Все кроссовки', 
  setSearchQuery, 
  searchQuery = '' 
}: Props) => {
  const { data: sneakers, isLoading, isError } = useGetSneakersQuery(params)

  if (isLoading) return <Loading />
  if (isError) return <div className="">Не удалось загрузить список кроссовок :(</div>

  return (
    <section className={styles.wrapper}>
      <header className={styles.heading}>
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.models}>{sneakers?.length || 0} моделей</p>
        </div>

        {setSearchQuery && (
          <SearchSneakers value={searchQuery} onChange={setSearchQuery} />
        )}
      </header>

      <div className="grid">
        {sneakers?.map(item => <SneakerCard key={item.id} data={item} />)}
      </div>
    </section>
  )
}

export default SneakersList
