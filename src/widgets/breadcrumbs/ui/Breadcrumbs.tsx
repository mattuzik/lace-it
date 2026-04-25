import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

const LABELS: Record<string, string> = {
  catalog: 'Каталог', mens: 'Мужские', womens: 'Женские',
  new: 'Новинки', sale: 'Распродажа', product: 'Каталог'
};

export const Breadcrumbs = () => {
  const { pathname, state } = useLocation();
  const paths = pathname.split('/').filter(Boolean);

  if (!paths.length) return null;

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/" className={styles.link}>Главная</Link>
      
      {paths.map((val, i) => {
        const isLast = i === paths.length - 1;
        const to = val === 'product' ? '/catalog' : `/${paths.slice(0, i + 1).join('/')}`;
        const label = (isLast && state?.productName) || LABELS[val] || val;

        return (
          <span key={to}>
            <span className={styles.separator}> {'>'} </span>
            {isLast ? (
              <span className={styles.current}>{label}</span>
            ) : (
              <Link to={to} className={styles.link}>{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};
