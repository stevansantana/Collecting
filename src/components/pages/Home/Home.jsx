import { useState } from "react";
import { Link } from "react-router-dom";
import CardProduto from "../CardProduto/CardProduto";
import styles from "./Home.module.css"
import Button from "../../layout/Button/Button"




export default function Home({ sobeDados }) {
    /* Itens cadastrados */
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            linkImg: "https://via.placeholder.com/200",
            nome: "Produto 1",
            valor: "00"
        },
        {
            id: 2,
            linkImg: "https://via.placeholder.com/200",
            nome: "Produto 2",
            valor: "100"
        }
    ])

    var [data, setData] = useState([])

    function recebeDados(nome, valor, id) {
        let data = {
            linkImg: "https://via.placeholder.com/200",
            id: id,
            nome: nome,
            valor: valor
        }
        setData(data)
        sobeDados(data)
    }

    function removerProduto(id){ 
        setProdutos(produtos.filter((produto) => produto.id !== id))
    }


    return (
        <main className={styles.products_container}>
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
                        handleRemove={removerProduto}
                    />
                )
            }
            {/* Renderiza isso, caso não haja items cadastrados */}
            {produtos.length === 0 &&
                <h1>Não há produtos cadastrados :(</h1>
            }

            <div>
                <Link to={'/new-product'}>
                    <Button conteudoBtn='Adicionar produto' />
                </Link>
            </div>
        </main>
    )
}