import { useState } from "react";
import { Link } from "react-router-dom";
import CardProduto from "../CardProduto/CardProduto";
import styles from "./Home.module.css"
import Button from "../../layout/Button/Button"
import { useEffect } from "react";
import axios from "axios";


const api = axios.create({
    baseURL: `http://localhost:5000/products`
})


export default function Home() {
    /* Itens cadastrados */

    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('/').then(response => {
            setProducts(response.data)
        })
    }, [])

    function removeProducts(id) {
        api.delete(`/${id}`);
        window.location.reload(false)
    }

    return (
        <main className={styles.products_container}>
            {/* Verifica se tem algum produto cadastrado e renderiza os produtos */}
            <div className={styles.card_container}>
                {products.length > 0 &&
                    products.map((produto) =>
                        <CardProduto
                            linkImg={produto.linkImg}
                            nome={produto.name}
                            valor={produto.price}
                            key={produto.id}
                            id={produto.id}
                            handleRemove={removeProducts}
                        />
                    )
                }
                {/* Renderiza isso, caso não haja items cadastrados */}
                {products.length === 0 &&
                    <h1>Não há produtos cadastrados :(</h1>
                }
            </div>

            <div className={styles.redirect_button}>
                <Link to={'/new-product'}>
                    <Button conteudoBtn='Adicionar produto' />
                </Link>
            </div>
        </main>
    )
}