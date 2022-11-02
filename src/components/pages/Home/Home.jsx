import CardProduto from "../CardProduto/CardProduto";


export default function Home() {
    /* Itens cadastrados */
    const produtos = [
        {
            linkImg: "https://via.placeholder.com/200",
            nome: "Produto 1",
            valor: "300"
        },
        {
            linkImg: "https://via.placeholder.com/200",
            nome: "Produto 2",
            valor: "00"
        }
    ]


    return (
        <main>
            {/* Verifica se tem algum produto cadastrado e renderiza os produtos */}
            {produtos.length > 0 &&
                produtos.map((produto) =>
                    <CardProduto
                        linkImg={produto.linkImg}
                        nome={produto.nome}
                        valor={produto.valor}
                    />
                )
            }
            {/* Renderiza isso, caso não haja items cadastrados */}
            {produtos.length === 0 &&
                <h1>Não há produtos cadastrados :(</h1>
            }

        </main>
    )
}