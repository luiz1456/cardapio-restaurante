import styles from './Header.module.css'

export const Header = () => {
  return (
    <header>
      <div className={`${styles.containerBanner} limitarLargura`}>
        <div className={styles.container}>
          <h1 className={styles.titulo}>Restaurant</h1>
          <p className={styles.paragrafo}>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
        </div>
      </div>
    </header>
  )
}
