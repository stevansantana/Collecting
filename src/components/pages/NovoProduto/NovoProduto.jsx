import styles from './NovoProduto.module.css'
import Button from '../../layout/Button/Button'
import Input from '../../form/Input/Input'
import { useState } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:5000/products`
})

export default function NovoProduto() {

    const [productName, setProductName] = useState()
    const [productPrice, setProductPrice] = useState()

    function postProduct() {
        api.post('/', {
            linkImg: "https://via.placeholder.com/200",
            name: productName || 'Sem nome',
            price: productPrice || 0
        })
    }

    return (
        <main className={styles.form_container}>
            <form action="">
                <div>
                    <img src="https://via.placeholder.com/500" alt="Sua imagem" /><br />
                    <input type="file" />
                </div>
                <div className={styles.form_input_container}>
                    <Input
                        texto='Nome do produto'
                        nome='nomeProduto'
                        tipo='text'
                        handleOnChange={(e) => setProductName(e.target.value)} />

                    <Input
                        texto="Valor do produto"
                        nome="custoProduto"
                        tipo="number"
                        handleOnChange={(e) => setProductPrice(e.target.value)} />

                    <Button
                        conteudoBtn='Postar produto'
                        handleClick={postProduct} />
                </div>

            </form>
        </main>
    )
}