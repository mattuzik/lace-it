import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'

type Props = {
  title: string;
  items: item[];
}

interface item {
  title: string;
  link: string;
  id: number;
}

export const FooterColumn = ({title = "", items} : Props) => {
  return (
    <div className={styles.column}>
      <h4 className={styles.columnTitle}>{title}</h4>
      <div className={styles.columnItems}>
        {items.map((item) => {
          return <NavLink to={item.link} key={item.id}>{item.title}</NavLink>
        })}
      </div>
    </div>
  )
}