import { NavLink } from 'react-router-dom'
import styles from './missing.module.scss'

const MissingPage = () => {
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.text}>Данной страницы не существует</h2>
      <NavLink to="/" className={styles.link}>Посетить главную страницу</NavLink>
    </main>
  )
}

export default MissingPage