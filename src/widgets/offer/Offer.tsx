import NavButton from "@/shared/ui/NavButton"
import styles from './Offer.module.scss'


const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.gray}>СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</p>
        <h1>Скидки до <span className={styles.accent}>40%</span> на прошлые коллекции</h1>
        <p className={`${styles.gray} ${styles.text}`}>Ограниченный сток. До конца апреля.</p>
        <NavButton to="/catalog/sale" type="olive">Смотреть распродажу</NavButton>
      </div>
    </section>
  )
}

export default Hero