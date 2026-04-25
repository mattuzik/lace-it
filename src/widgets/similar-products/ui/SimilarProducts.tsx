import { useMemo } from 'react';
import { useGetSneakersQuery, SneakerCard } from '@/entities/sneakers';
import Loading from '@/shared/ui/Loading';
import styles from './SimilarProducts.module.scss';

interface Props {
  currentGender: string;
  currentId: string;
}

export const SimilarProducts = ({ currentGender, currentId }: Props) => {
  const { data: sneakers, isLoading } = useGetSneakersQuery({ gender: currentGender });

  const similarItems = useMemo(() => 
    sneakers?.filter(s => s.id !== currentId).slice(0, 4),
    [sneakers, currentId]
  );

  if (isLoading) return <Loading />
  if (!similarItems?.length) return null

  return (
    <section className={styles.similar}>
      <h2 className={styles.title}>Похожие товары</h2>
      <div className="grid-wide">
        {similarItems.map(item => <SneakerCard key={item.id} data={item} />)}
      </div>
    </section>
  )
}