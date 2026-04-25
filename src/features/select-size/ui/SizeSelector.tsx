import { Dispatch, SetStateAction } from 'react';
import styles from './SizeSelector.module.scss';
import { SIZES } from '@/shared/config/variables';

interface SizeSelectorProps {
  selectedSize: number | null;
  // Типизация функции из useState
  setSelectedSize: Dispatch<SetStateAction<number | null>>; 
}


export const SizeSelector = ({selectedSize, setSelectedSize} : SizeSelectorProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Выберите размер (EU):</p>
      <div className={styles.grid}>
        {SIZES.map((size) => (
          <button
            key={size}
            className={`${styles.sizeBtn} ${selectedSize === size ? styles.active : ''}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}