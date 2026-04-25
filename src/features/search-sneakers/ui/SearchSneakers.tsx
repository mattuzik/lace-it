import styles from './SearchSneakers.module.scss'

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchSneakers = ({ value, onChange }: Props) => {

  return (
  <div className={styles.search}>
    <input 
      type="text" 
      placeholder="Поиск..." 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={64} 
      id='search-sneakers'
      className={styles.input}
    />
  </div>
  )
}