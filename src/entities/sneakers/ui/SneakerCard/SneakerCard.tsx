import { Link } from 'react-router-dom';
import { type Sneaker } from '../../model/types';
import styles from './SneakerCard.module.scss';

interface Props {
  data: Sneaker;
}

export const SneakerCard = ({ data }: Props) => {
  const { name, price, image, isSale, defaultPrice } = data;

  return (
    <Link to={`/product/${data.id}`} state={{ productName: data.name }} className={styles.card}>
      <img src={image} alt={name} className={styles.image}/>
      <h5 className={styles.title}>{name}</h5>
      <p>
        <span className={styles.price}>{price} ₽</span>
        {isSale && defaultPrice && (
          <span className={styles.oldPrice}>{defaultPrice} ₽</span>
        )}
      </p>
    </Link>
  );
};
