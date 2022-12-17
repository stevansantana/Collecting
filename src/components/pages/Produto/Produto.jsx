import styles from './Produto.module.css'
import Button from '../../layout/Button/Button'
import { useState } from 'react'
import EditPage from '../EditPage/EditPage'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { productState } from '../../../atoms'
import { api } from '../../../apiEndpoints'

export default function Produto() {


    const [produto, setProduto] = useRecoilState(productState)

    const [edit, setEdit] = useState(false)
    const { id } = useParams()
    
    useState(() => {
        api.get(`produtos/${id}`)
            .then(resp => setProduto(resp.data))
    })


    function toggleEdit() {
        setEdit(!edit)
    }


    return (
        <main className={styles.product_container}>
            {!edit ? (
                <div>
                    <img src={produto.linkImg} alt="Imagem do produtos" width={500} />
                    <div>
                        <h1>{produto.name}</h1>
                        <h1>R${produto.price}</h1>
                        <div className={styles.button_container}>
                            <Button conteudoBtn='Comprar' />
                            <button onClick={toggleEdit}>Editar</button>
                        </div>
                    </div>
                </div>
            ) : (
                <EditPage data={produto} />
            )
            }
        </main>
    )
}