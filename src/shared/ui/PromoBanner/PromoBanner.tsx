import { currentYear } from "../../config/variables"
import styles from './PromoBanner.module.scss'

export const PromoBanner = () => {
  return (
  <div className={styles.promo}>
    <p>Бесплатная доставка при заказе от ₽5 000 → Используй код Lace{currentYear}</p>
  </div>
  )
}