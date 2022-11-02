import styles from './CardProduto.module.css'

export default function CardProduto({ linkImg, nome, valor }) {
    return (
        <div className={styles.card_container}>
            <img
                src={linkImg}
                alt="Imagem do produto"
            />
            <h3>{nome}</h3>
            <h3>R${valor}</h3>
            <button>Comprar</button>
        </div>
    )
}