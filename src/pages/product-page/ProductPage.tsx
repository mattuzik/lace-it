import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetSneakerByIdQuery } from '@/entities/sneakers';
import { SizeSelector } from '@/features/select-size';
import { SimilarProducts } from '@/widgets/similar-products';
import { ToggleFavoriteButton } from '@/features/toggle-favorite';
import { addItem } from '@/entities/cart';
import Loading from '@/shared/ui/Loading';
import Button from '@/shared/ui/Button';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const { id = '' } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  
  const { data: sneaker, isLoading, error } = useGetSneakerByIdQuery(id)

  if (isLoading) return <Loading />;
  if (error || !sneaker) return <p>Товар не найден</p>

  const handleAddToCart = () => {
    if (!selectedSize) return alert('Выберите размер')
    dispatch(addItem({ ...sneaker, selectedSize }))
  };

  const { name, image, price, defaultPrice, gender } = sneaker

  return (
    <main className="container">
      <div className={styles.productWrapper}>
        <header className={styles.heading}>
          <img src={image} alt={name} className={styles.image} />
          
          <div className={styles.column}>
            <h3>{name}</h3>
            <h3 className={styles.priceText}>
              <span className={styles.price}>{price} ₽</span>
              {defaultPrice && <span className={styles.oldPrice}>{defaultPrice} ₽</span>}
            </h3>
            
            <SizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
            
            <div className={styles.actions}>
              <Button onClick={handleAddToCart}>Добавить в корзину</Button>
              <ToggleFavoriteButton productId={Number(id)}/>
            </div>
          </div>  
        </header>
      </div>
      <SimilarProducts currentGender={gender} currentId={id}/>
    </main>
  )
}

export default ProductPage