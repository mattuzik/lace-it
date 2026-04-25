import { NavLink } from "react-router-dom";
import { useCartTotalPrice } from '@/entities/cart';
import favIcon from '@/shared/assets/icons/fav.svg?url';
import cartIcon from '@/shared/assets/icons/cart.svg?url';
import styles from './Header.module.scss';

export const HeaderActions = () => {
  const totalPrice = useCartTotalPrice()

  return (
    <ul className={styles.actions}>
      <NavLink to="/favorites" className={styles.action}><img src={favIcon} alt="Favs" /></NavLink>
      <NavLink to="/cart" className={styles.action}><img src={cartIcon} alt="Cart" />{totalPrice} руб.</NavLink>
    </ul>
  )
}
