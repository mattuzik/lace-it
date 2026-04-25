import { type cartItem, CartItem } from '../../index'
import styles from './CartItemsList.module.scss'

interface Props {
  items: cartItem[]
}

export const CartList = ({ items } : Props) => {
  if (items.length === 0) {
    return <p className={styles.empty}>Ваша корзина пуста</p>
  }

  return (
    <div className={styles.cartColumn}>
      <div className={styles.items}>
        {items.map((item, id) => {
          return <CartItem item={item} key={id}/>
        })}
      </div>
  </div>  
  )
}