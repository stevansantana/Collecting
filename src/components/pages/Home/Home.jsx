import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { seekProductState, listaProdutos, usuarioLogadoState, tokenState } from "../../../atoms";
import CardProduto from "../CardProduto/CardProduto";
import styles from "./Home.module.css"
import Button from "../../layout/Button/Button"
import { api } from '../../../apiEndpoints'
import { useEffect } from "react";


export default function Home() {
   const [produtos, setProdutos] = useRecoilState(listaProdutos)
   const usuario = useRecoilValue(usuarioLogadoState)
   const token = useRecoilValue(tokenState)

   useEffect(() => {
      const getProducts = async () => {
         await api.get('/produtos')
            .then(resp => resp.data)
            .then(data => setProdutos(data))
      }
      getProducts()
   }, [setProdutos])

   const productoBuscado = useRecoilValue(seekProductState)

   function removeProducts(id) {
      api.delete(`produtos/${id}`);
      window.location.reload(false)
   }

   function adicionarAoCarrinho(id) {
      api.patch(`carrinho/${usuario._id}`, {
         produtos: {
            idProduto: id,
            name: produtos.filter(produto => produto._id === id)[0].name,
            price: produtos.filter(produto => produto._id === id)[0].price,
            linkImg: produtos.filter(produto => produto._id === id)[0].linkImg
         }
      }, {
         headers: {
            authorization: 'Bearer ' + token
         }
      })
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
            {produtos.length > 0 ?
               (
                  produtos.filter((value) => {
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
                        handleCart={adicionarAoCarrinho}
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