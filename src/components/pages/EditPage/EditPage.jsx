import Input from '../../form/Input/Input'
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

                <Input tipo='text' nome='novoNome' texto='Novo nome' placeholder={data.nome} />
                <Input tipo='number' nome='novoValor' texto='Novo valor' placeholder={`R$${data.valor}`} />
                <Button conteudoBtn='Finalizar' />

            </div>
        </main>
    )
}