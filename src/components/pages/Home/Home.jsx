import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { productsListState, seekProductState } from "../../../atoms";
import CardProduto from "../CardProduto/CardProduto";
import styles from "./Home.module.css"
import Button from "../../layout/Button/Button"
import { api } from '../../../apiEndpoints'


export default function Home() {
    /* Itens cadastrados */


    const listaProdutos = useRecoilValue(productsListState)
    const productoBuscado = useRecoilValue(seekProductState)

    function removeProducts(id) {
        api.delete(`produtos/${id}`);
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
                {listaProdutos.length > 0 ?
                    (
                        listaProdutos.filter((value) => {
                            if (productoBuscado === '') {
                                return value
                            } else if (value.name.toLowerCase().includes(productoBuscado.toLowerCase())) {
                                return value;
                            }
                            return value
                        }).map((produto) =>
                            <CardProduto
                                linkImg={produto.linkImg}
                                nome={produto.name}
                                valor={produto.price}
                                key={produto._id}
                                id={produto._id}
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