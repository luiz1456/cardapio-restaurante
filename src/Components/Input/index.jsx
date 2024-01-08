import styles from './Input.module.css'

import lupa from '../../assets/assets/lupa.png'

export default function Input({handleTextoInput,value}) {
    return (
        <div className={styles.containerInput}>
            <img className={styles.imgInput} src={lupa} alt="lupa" />
            <input className={styles.campoBusca} type="text" onChange={event => handleTextoInput(event.target.value)} value={value} placeholder="Pesquise aqui um dos pratos do nosso cardápio" />
        </div>
    )
}
