import styles from './Produto.module.css'
import Button from '../../layout/Button/Button'
import { useState } from 'react'
import EditPage from '../EditPage/EditPage'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:5000/products`
})

export default function Produto() {


    const [product, setProduct] = useState([])
    const [edit, setEdit] = useState(false)
    const { id } = useParams()

    useState(() => {
        api.get(`/${id}`)
            .then(resp => setProduct(resp.data))
        console.log(product)
    }, [])


    function toggleEdit() {
        setEdit(!edit)
    }


    return (
        <main className={styles.product_container}>
            {!edit ? (
                <div>
                    <img src={product.linkImg} alt="" />
                    <div>
                        <h1>{product.name}</h1>
                        <h1>R${product.price}</h1>
                        <div className={styles.button_container}>
                            <Button conteudoBtn='Comprar' />
                            <button onClick={toggleEdit}>Editar</button>
                        </div>
                    </div>
                </div>
            ) : (
                <EditPage data={product} />
            )
            }
        </main>
    )
}