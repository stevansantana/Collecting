import Button from '../../layout/Button/Button'
import styles from './EditPage.module.css'

export default function EditPage({ data }) {
    return (
        <main className={styles.edit_container}>
            <div>
                <img src='https://via.placeholder.com/350' alt="NewImg" /><br />
                <input type="file" />
            </div>
            <div>

                <label htmlFor="novoNome">Novo nome</label><br />
                <input type="text" placeholder={data.nome} id="novoNome" /><br />
                <label htmlFor="novoValor">Novo valor</label><br />
                <input type="text" placeholder={`R$${data.valor}`} /><br />
                <Button conteudoBtn='Finalizar' />

            </div>
        </main>
    )
}