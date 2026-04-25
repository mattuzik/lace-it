import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CartSummary } from '@/widgets/cart-summary';
import { CartList, useCartItems, cleanItems } from '@/entities/cart';
import styles from './CartPage.module.scss'

const CartPage = () => {
  const dispatch = useDispatch()
  const cartItems = useCartItems()
  const totalCount = cartItems.length

  const handleCleanClick = () => {
    if (confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(cleanItems())
    }
  }

  return (
    <main className='container'>
      <div className={styles.top}>
        <h2>Корзина</h2>
        <p className='gray'>Всего товаров: {totalCount}</p>
      </div>
      <div className={styles.cart}>
        <div className={styles.cartColumn}>
          <CartList items={cartItems}/> 
          <div className={styles.actions}>
            <NavLink to="/catalog" className={styles.actionButton}>{` < Продолжить покупки`}</NavLink>

            {cartItems.length > 0 && (
              <p className={`gray ${styles.actionButton}`} onClick={handleCleanClick}>
                Очистить корзину?
              </p>
            )}
          </div>
        </div>
        {cartItems.length > 0 &&<CartSummary />}
      </div>
    </main>
  )
}

export default CartPage