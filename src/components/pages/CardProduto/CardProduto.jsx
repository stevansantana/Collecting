import styles from './CardProduto.module.css'
import { Link } from 'react-router-dom'

export default function CardProduto({ linkImg, nome, valor, id , handleClick}) {

    function callBack(){
        handleClick(linkImg,nome, valor, id)
    }

    return (
        <div className={styles.card_container} onClick={callBack}>
            <Link
                to={`/product/${id}`}
                style={{ textDecoration: 'none', color: 'black' }}>
                <img
                    src={linkImg}
                    alt="Imagem do produto"
                />
                <h3>{nome}</h3>
                <h3>R${valor}</h3>
            </Link>
            <button>Comprar</button>
        </div>
    )
}