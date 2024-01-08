import styles from './BotoesCategorias.module.css'

import bebidas from '../../assets/assets/bebidas.png'
import carne from '../../assets/assets/carne.png'
import entrada from '../../assets/assets/entrada.png'
import sobremesa from '../../assets/assets/sobremesa.png'
import massa from '../../assets/assets/massa.png'
import salada from '../../assets/assets/salada.png'


export default function BotoesCategorias({ botaoAtivo, handleSetCategoria }) {
    return (
        <div className={styles.containerButtons}>
            <button className={`${styles.button} ${botaoAtivo === 'Entradas' ? styles.buttonActive : ''}`}
                onClick={() => handleSetCategoria('Entradas')}
            >
                <div className={styles.container}>
                    <img src={entrada} alt="entradas" />
                    <p>Entradas</p>
                </div>
            </button>
            <button className={`${styles.button} ${botaoAtivo === 'Massas' ? styles.buttonActive : ''}`}
                onClick={() => handleSetCategoria('Massas')}
            >
                <div className={styles.container}>
                    <img src={massa} alt="massas" />
                    <p>Massas</p>
                </div>
            </button>
            <button className={`${styles.button} ${botaoAtivo === 'Carnes' ? styles.buttonActive : ''}`}
                onClick={() => handleSetCategoria('Carnes')}
            >
                <div className={styles.container}>
                    <img src={carne} alt="carnes" />
                    <p>Carnes</p>
                </div>
            </button>
            <button className={`${styles.button} ${botaoAtivo === 'Bebidas' ? styles.buttonActive : ''}`}
                onClick={() => handleSetCategoria('Bebidas')}
            >
                <div className={styles.container}>
                    <img src={bebidas} alt="bebidas" />
                    <p>Bebidas</p>
                </div>
            </button>
            <button className={`${styles.button} ${botaoAtivo === 'Saladas' ? styles.buttonActive : ''}`}
                onClick={() => handleSetCategoria('Saladas')}
            >
                <div className={styles.container}>
                    <img src={salada} alt="saladas" />
                    <p>Saladas</p>
                </div>
            </button>
            <button className={`${styles.button} ${botaoAtivo === 'Sobremesas' ? styles.buttonActive : ''}`}
                onClick={() => handleSetCategoria('Sobremesas')}
            >
                <div className={styles.container}>
                    <img src={sobremesa} alt="sobremesas" />
                    <p>Sobremesas</p>
                </div>
            </button>
        </div >
    )
}
