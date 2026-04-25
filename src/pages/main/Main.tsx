import { NavLink } from 'react-router-dom';
import { useGetNewArrivalsQuery, SneakerCard, Sneaker } from '@/entities/sneakers';
import Loading from '@/shared/ui/Loading';
import Hero from '@/widgets/hero'
import Offer from '@/widgets/offer'
import styles from './Main.module.scss'

const Main = () => {
  const { data: sneakers, isLoading, error } = useGetNewArrivalsQuery({})

  if (isLoading) return <Loading />
  if (error) return <main className='container'>Ошибка при загрузке</main>

  return (
    <main>
      <Hero />
      <div style={{marginBlock: "60px"}} className='container'>
        <div className={styles.top}>
          <h3>Новинки</h3>
          <NavLink to='catalog/new' className={styles.link}>Смотреть все →</NavLink>
        </div>
        <div className='grid-wide'>        
          {sneakers?.items?.map((item: Sneaker) => (
            <SneakerCard key={item.id} data={item} />
          ))}
        </div>
      </div>
      <Offer />
    </main>
  )
}

export default Main