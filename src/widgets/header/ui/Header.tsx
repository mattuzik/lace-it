import { NavLink } from "react-router-dom"
import { PromoBanner } from "@/shared/ui/PromoBanner"
import { CategoryList } from "./CategoryList"
import { HeaderActions } from './HeaderActions'
import styles from './Header.module.scss'

export const Header = () => {

  return (
    <header className={styles.header}>
      <PromoBanner />
      <div className={`container ${styles.wrapper}`}>
        <CategoryList />
        <NavLink to='/' className={styles.main_link}>Lace It Store</NavLink>
        <HeaderActions />
      </div>
    </header>
  )
}