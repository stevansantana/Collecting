import styles from './Produto.module.css'
import Button from '../../layout/Button/Button'
import { useState } from 'react'
import EditPage from '../EditPage/EditPage'


export default function Produto({ data }) {

    let productData = data
    productData.linkImg = "https://via.placeholder.com/350"

    const [edit, setEdit] = useState(false)

    function toggleEdit() {
        setEdit(!edit)
    }


    return (
        <main className={styles.product_container}>
                {!edit ? (
                    <div>
                        <img src={productData.linkImg} alt="" />
                        <div>
                            <h1>{`${productData.nome}`}</h1>
                            <h1>R${productData.valor}</h1>
                            <div className={styles.button_container}>
                                <Button conteudoBtn='Comprar' />
                                <button onClick={toggleEdit}>Editar</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <EditPage data={productData} />
                )
                }
        </main>
    )
}