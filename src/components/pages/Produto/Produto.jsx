import styles from './Produto.module.css'
import Button from '../../layout/Button/Button'
import BackButton from '../../layout/BackButton/BackButton'


export default function Produto({ data }) {

    const productData = data
    productData.linkImg = "https://via.placeholder.com/350"


    return (
        <main className={styles.product_container}>
            <BackButton />
            <img src={productData.linkImg} alt="" />
            <div>
                <h1>{`${productData.nome} ${productData.id}`}</h1>
                <h1>R${productData.valor}</h1>
                <Button conteudoBtn='Comprar' />
            </div>
        </main>
    )
}