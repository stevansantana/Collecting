import styles from './NovoProduto.module.css'
import Button from '../../layout/Button/Button'
import Input from '../../form/Input/Input'


export default function NovoProduto() {

    return (
        <main className={styles.form_container}>
            <form action="">
                <div>
                    <img src="https://via.placeholder.com/500" alt="Sua imagem" /><br />
                    <input type="file" />
                </div>
                <div className={styles.form_input_container}>
                    <Input texto='Nome do produto' nome='nomeProduto' tipo='text' />
                    <Input texto="Valor do produto" nome="custoProduto" tipo="number" />
                    <Button conteudoBtn='Postar produto' />
                </div>

            </form>
        </main>
    )
}