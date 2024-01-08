import { useState } from 'react'
import { produtos } from '../../Data/data-produtos'
import BotoesCategorias from '../BotoesCategorias'
import Card from '../Card'
import styles from './Main.module.css'
import Input from '../Input'


export default function Main() {
    const [listaFiltrada, setListaFiltrada] = useState(produtos.filter(produto => produto.categoria === 'Entradas'))

    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Entradas')

    const [textoDigitado, setTextoDigitado] = useState('')

    const handleTextoInput = (textoDigitado) => {
        if (textoDigitado.length >= 3) {
            setListaFiltrada(produtos.filter(produto => produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) || produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())))
        }
        setTextoDigitado(textoDigitado)

    }

    const handleSetCategoria = (categoria) => {
        setListaFiltrada(produtos.filter(produto => produto.categoria === categoria))
        setCategoriaSelecionada(categoria)
        setTextoDigitado('')
    }


    return (
        <main className='limitarLargura'>
            <BotoesCategorias
                handleSetCategoria={handleSetCategoria}
                botaoAtivo={categoriaSelecionada}
            />
            <Input
                handleTextoInput={handleTextoInput}
                value={textoDigitado}
            />
            <div className='containerCards'>
                <h2 className={styles.titulo}>Cardápio</h2>
                <div className={styles.containerCards}>
                    {listaFiltrada.map((produto) => {
                        return (
                            <Card
                                key={produto.id}
                                imagem={produto.imagem}
                                nome={produto.nome}
                                categoria={produto.categoria}
                                descricao={produto.descricao}
                                preco={produto.preco}
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
