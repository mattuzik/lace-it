import { useDispatch } from "react-redux"
import { addItem, minusItem, removeItem } from "../../model/cartSlice"
import type { cartItem } from "@/shared/types/cartTypes"
import styles from './CartItem.module.scss'

export const CartItem = ({ item }: { item: cartItem }) => {
  const { id, name, price, image, count, selectedSize } = item
  const dispatch = useDispatch()

  const onRemove = () => confirm("Удалить товар?") && dispatch(removeItem(item))
  const onPlus = () => dispatch(addItem(item))
  const onMinus = () => dispatch(minusItem({ id, selectedSize }))

  return (
    <div className={styles.item}>
      <img src={image} alt={name} className={styles.image} />
      
      <div className={styles.wrapper}>
        <div className={`space-between ${styles.info}`}>    
          <div>
            <h4>{name}</h4>
            <p className="gray">Размер: {selectedSize}</p>
          </div>    
          <button className={`gray ${styles.deleteButton}`} onClick={onRemove}>Удалить</button>
        </div>

        <div className={`space-between ${styles.info}`}>
          <div className={styles.counter}>
            <button onClick={onMinus} className={styles.countBtn}>-</button>
            <span className={styles.countValue}>{count}</span>
            <button onClick={onPlus} className={styles.countBtn}>+</button>
          </div>
          <h4>{price} ₽</h4>
        </div>
      </div>
    </div>
  )
}
