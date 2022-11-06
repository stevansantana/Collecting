import styles from './NovoProduto.module.css'
import Button from '../../layout/Button/Button'
import BackButton from '../../layout/BackButton/BackButton'

export default function NovoProduto() {

    return (
        <main className={styles.form_container}>
            <BackButton />
            <form action="">
                <div>
                    <img src="https://via.placeholder.com/500" alt="Sua imagem" /><br />
                    <input type="file" />
                </div>
                <div className={styles.form_input_container}>
                    <label htmlFor="product-name">Nome do produto</label>
                    <input type="text" id="product-name" />
                    <label htmlFor="product-cost">Valor do produto</label>
                    <input type="number" /><br />
                    <Button conteudoBtn='Postar produto' />
                </div>

            </form>
        </main>
    )
}