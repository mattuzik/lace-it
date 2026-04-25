import styles from './CartSummary.module.scss'
import NavButton from '@/shared/ui/NavButton'
import { useCartTotalPrice } from '@/entities/cart';

export const CartSummary = () => {
  const totalPrice = useCartTotalPrice()

  return (
  <div className={styles.actions}>
    <h4>Итого</h4>
    <div className="space-between"><p className='gray'>Товары</p> <p>{totalPrice} ₽</p></div>
    <div className="space-between"><p className='gray'>Доставка</p> <p className='green'>Бесплатно</p></div>
    <div className="space-between"><h4>К оплате</h4> <h4>{totalPrice} ₽</h4></div>
    
    <NavButton to='/checkout' type="black" className={styles.orderButton}>Оформить заказ</NavButton>

    <p className='gray text-center'>Безопасная оплата</p>
  </div>
  )
}