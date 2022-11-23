import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { products, seekProductState } from "../../../atoms";
import CardProduto from "../CardProduto/CardProduto";
import styles from "./Home.module.css"
import Button from "../../layout/Button/Button"
import axios from "axios";


const api = axios.create({
    baseURL: `http://localhost:5000/products`
})


export default function Home() {
    /* Itens cadastrados */

    const produtoCadastrado = useRecoilValue(products)
    const productoBuscado = useRecoilValue(seekProductState)
    //const [products, setProducts] = useState([])

    //useEffect(() => {
    //  api.get('/').then(response => {
    //    setProducts(response.data)
    //        })
    //  }, [])

    function removeProducts(id) {
        api.delete(`/${id}`);
        window.location.reload(false)
    }

    return (
        <main className={styles.products_container}>
            <div className={styles.redirect_button}>
                <Link to={'/new-product'}>
                    <Button conteudoBtn='Adicionar produto' />
                </Link>
            </div>
            {/* Verifica se tem algum produto cadastrado e renderiza os produtos */}
            <div className={styles.card_container}>
                {produtoCadastrado.length > 0 ?
                    (
                        produtoCadastrado.filter((value) => {
                            if (productoBuscado === '') {
                                return value
                            } else if (value.name.toLowerCase().includes(productoBuscado.toLowerCase())) {
                                return value;
                            }
                        }).map((produto) =>
                            <CardProduto
                                linkImg={produto.linkImg}
                                nome={produto.name}
                                valor={produto.price}
                                key={produto.id}
                                id={produto.id}
                                handleRemove={removeProducts}
                            />
                        )

                    )
                    :
                    <h1>Não há produtos cadastrados :(</h1>
                }
            </div>

        </main>
    )
}