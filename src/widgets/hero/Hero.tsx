import NavButton from "@/shared/ui/NavButton"
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.content}>
      <div className={styles.wrapper}>
        <p className={styles.text}>КОЛЛЕКЦИЯ 2026</p>
        <h1>Комфорт без границ</h1>
        <p className={styles.text}>Твои новые любимые кроссовки в паре кликов от тебя! Огромный выбор моделей для спорта и города. Заказывай сегодня — беги навстречу целям завтра!</p>
        <div className={styles.buttons}>
          <NavButton to='/catalog' type="black">Смотреть каталог</NavButton>
          <NavButton to='/catalog/new' type="white">Новинки сезона</NavButton>
        </div>
      </div>
    </section>
  )
}

export default Hero