import styles from './CardProduto.module.css'
import { Link } from 'react-router-dom'
import Button from '../../layout/Button/Button'

export default function CardProduto({ nome, valor, id, handleClick, handleRemove }) {

    function subirDados() {
        handleClick(nome, valor, id)
    }

    function remove(e){
        e.preventDefault()
        handleRemove(id)
    }
  
    return (
        <div className={styles.card_container} onClick={subirDados}>
            <Link
                to={`/product/${id}`}
                style={{ textDecoration: 'none', color: 'black' }}>
                <img
                    src="https://via.placeholder.com/200"
                    alt="Imagem do produto"
                />
                <h3>{nome}</h3>
                <h3>R${valor}</h3>
            </Link>
            <Button conteudoBtn='Comprar' />
            <button onClick={remove}>Remover</button>
        </div>
    )
}