import styles from './NovoProduto.module.css'
import Button from '../../layout/Button/Button'
import Input from '../../form/Input/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../apiEndpoints'
import { useRecoilState } from 'recoil'
import { productsListState } from '../../../atoms'


export default function NovoProduto() {

    const [productName, setProductName] = useState()
    const [productPrice, setProductPrice] = useState()
    const [produtos, setProdutos] = useRecoilState(productsListState)
    const navigate = useNavigate();


    async function postProduct() {
        try {
            const novoProduto = {
                linkImg: "https://via.placeholder.com/200",
                name: productName || 'Sem nome',
                price: productPrice || 0
            }
            const criarProduto =  await api.post('/produtos', novoProduto)
            setProdutos([...produtos, criarProduto])

            navigate('/')
        } catch (error) {
            console.log(error)
        }
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