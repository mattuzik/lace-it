import { NavLink } from "react-router-dom"
import { categories } from "@/shared/config/variables"
import styles from './Header.module.scss'

export const CategoryList = () => {
  return (
    <ul className={styles.categories}>
      {categories.map(item => {
          return <li className={styles.category} key={item.id}>
            <NavLink 
              to={item.link}
              className={({ isActive }) => 
                isActive ? `${styles.categoryLink} ${styles.active}` : styles.categoryLink
              }
            >
              {item.title}
            </NavLink>
          </li>
      })}
    </ul>
  )
}