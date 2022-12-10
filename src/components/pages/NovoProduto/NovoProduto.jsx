import styles from './NovoProduto.module.css'
import Button from '../../layout/Button/Button'
import Input from '../../form/Input/Input'
import { useState } from 'react'
import { api } from '../../../apiEndpoints'
import { useRecoilState } from 'recoil'
import { listaProdutos } from '../../../atoms'
import { useNavigate } from 'react-router-dom'


export default function NovoProduto() {


    const [productName, setProductName] = useState()
    const [productPrice, setProductPrice] = useState()
    // eslint-disable-next-line no-unused-vars
    const [produtos, setProdutos] = useRecoilState(listaProdutos)
    const navigate = useNavigate()

    function postProduct() {
        const postFunction = async () => {
            try {
                const novoProduto = {
                    linkImg: "https://via.placeholder.com/200",
                    name: productName || 'Sem nome',
                    price: productPrice || 0
                }
                await api.post('/produtos', novoProduto)
            } catch (error) {
                console.log(error)
            }
        }
        postFunction()
        navigate('/')
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