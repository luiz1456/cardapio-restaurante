import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.containerImagem}>
                <img src={props.imagem} alt={props.imagem}/>
            </div>
            <div className={styles.containerInfo}>
                <h3>{props.nome}</h3>
                <span className={styles.categoria}>{props.categoria}</span>
                <p className={styles.descricao}>{props.descricao}</p>
                <p className={styles.preco}>{`R$ ${props.preco.toFixed(2)}`}</p>
            </div>
        </div>
    )
}
