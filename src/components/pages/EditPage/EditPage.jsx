import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../form/Input/Input'
import Button from '../../layout/Button/Button'
import styles from './EditPage.module.css'

const api = axios.create({
    baseURL: `http://localhost:5000/products`
})

export default function EditPage() {

    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [newName, setNewName] = useState()
    const [newPrice, setNewPrice] = useState()

    useState(() => {
        api.get(`/${id}`)
            .then(resp => setProduct(resp.data))
    }, [])

    function updateProduct() {
        api.put(`/${id}`, {
            linkImg: product.linkImg,
            name: newName || product.name,
            price: newPrice || product.price
        })
    }


    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handlePriceChange = (e) => {
        setNewPrice(e.target.value)
    }

    return (
        <main className={styles.edit_container}>
            <div>
                <img src='https://via.placeholder.com/350' alt="NewImg" /><br />
                <input type="file" />
            </div>
            <div>

                <Input
                    tipo='text'
                    nome='novoNome'
                    texto='Novo nome'
                    placeholder={product.name}
                    handleOnChange={handleNameChange} />

                <Input
                    tipo='number'
                    nome='novoValor'
                    texto='Novo valor'
                    placeholder={`R$${product.price}`}
                    handleOnChange={handlePriceChange} />
                <Button conteudoBtn='Finalizar' handleClick={updateProduct} />

            </div>
        </main>
    )
}