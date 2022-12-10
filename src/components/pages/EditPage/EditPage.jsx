import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../form/Input/Input'
import Button from '../../layout/Button/Button'
import styles from './EditPage.module.css'
import { listaProdutos } from '../../../atoms'
import { useRecoilState } from 'recoil'
import { api } from '../../../apiEndpoints'

export default function EditPage() {

    const { id } = useParams()
    const [product, setProduct] = useRecoilState(listaProdutos)
    const [newName, setNewName] = useState()
    const [newPrice, setNewPrice] = useState()
    const navigate = useNavigate();
    
    // Get produto pelo id
    useState(() => {
        api.get(`produtos/${id}`)
            .then(resp => setProduct(resp.data))
    }, [])

    // Atualiza os dados do produto
    function updateProduct() {
        api.put(`produtos/${id}`, {
            linkImg: product.linkImg,
            name: newName || product.name,
            price: newPrice || product.price
        })
        // Leva para página anterior
        navigate(-1)
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