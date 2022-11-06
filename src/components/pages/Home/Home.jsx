import { useState } from "react";
import { Link } from "react-router-dom";
import CardProduto from "../CardProduto/CardProduto";
import styles from "./Home.module.css"
import Button from "../../layout/Button/Button"




export default function Home({ sobeDados }) {
    /* Itens cadastrados */
    const produtos = [
        {
            id: 1,
            linkImg: "https://via.placeholder.com/200",
            nome: "Produto ",
            valor: "00"
        },
        {
            id: 2,
            linkImg: "https://via.placeholder.com/200",
            nome: "Produto ",
            valor: "100"
        }
    ]

    const [data, setData] = useState({})

    function recebeDados(linkImg, nome, valor, id) {
        setData(data.linkImg = linkImg, data.nome = nome, data.valor = valor, data.id = id)
        sobeDados(data)
    }


    return (
        <div className={styles.page_container}>
            <main className={styles.products_container}>
                <div>
                    <Link to={'/new-product'}>
                        <Button conteudoBtn='Adicionar' />
                    </Link>
                </div>
                {/* Verifica se tem algum produto cadastrado e renderiza os produtos */}
                {produtos.length > 0 &&
                    produtos.map((produto) =>
                        <CardProduto
                            linkImg={produto.linkImg}
                            nome={produto.nome}
                            valor={produto.valor}
                            key={produto.id}
                            id={produto.id}
                            handleClick={recebeDados}
                        />
                    )
                }
                {/* Renderiza isso, caso não haja items cadastrados */}
                {produtos.length === 0 &&
                    <h1>Não há produtos cadastrados :(</h1>
                }

            </main>
        </div>
    )
}