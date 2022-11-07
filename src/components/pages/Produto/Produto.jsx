import styles from './Produto.module.css'
import Button from '../../layout/Button/Button'


export default function Produto({ data }) {

    let productData = data
    productData.linkImg = "https://via.placeholder.com/350"


    return (
        <main className={styles.product_container}>
            <img src={productData.linkImg} alt="" />
            <div>
                <h1>{`${productData.nome}`}</h1>
                <h1>R${productData.valor}</h1>
                <Button conteudoBtn='Comprar' />
            </div>
        </main>
    )
}