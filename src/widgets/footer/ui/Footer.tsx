import { NavLink } from 'react-router-dom'
import { currentYear, categories, info } from '@/shared/config/variables'
import { FooterColumn } from './FooterColumn'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.top}>
        <div className={styles.textColumn}>
          <NavLink to="/" className={`h2 ${styles.mainLink}`}>Lace It</NavLink>
          <p className='gray'>Удобная спортивная форма для активного образа жизни. Мягкие подошвы и прочные материалы</p>
        </div>
        
        <div className={styles.columnWrapper}>
          <FooterColumn title="Магазин" items={categories}/>
          <FooterColumn title="Инфо" items={info}/>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>© {currentYear} Lace It. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer