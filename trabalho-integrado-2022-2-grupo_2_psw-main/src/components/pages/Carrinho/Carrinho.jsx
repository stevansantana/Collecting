import React, { useEffect } from 'react';
import Button from '../../layout/Button/Button'
import styles from './Carrinho.module.css'
import { carrinhoState, tokenState, usuarioLogadoState } from '../../../atoms';
import { Link } from "react-router-dom";
import { api } from '../../../apiEndpoints'
import { useRecoilState, useRecoilValue } from 'recoil';
import Table from '../../layout/Table/Table';

export default function Carrinho() {

   const [carrinho, setCarrinho] = useRecoilState(carrinhoState)
   const _carrinho = useRecoilState(carrinhoState)
   const usuario = useRecoilValue(usuarioLogadoState)
   const token = useRecoilValue(tokenState)

   useEffect(() => {
      const carrinhoHandler = () => {
         if (carrinho === undefined) {
            api.post(`/carrinho/${usuario._id}`, {}, {
               headers: {
                  authorization: 'Bearer ' + token
               }
            })
               .then(res => setCarrinho(res.data))
         }
         return carrinho
      }
      carrinhoHandler()

   }, [carrinho, setCarrinho, token, usuario._id])

   useEffect(() => {
      api.get(`/carrinho/${usuario._id}`, {
         headers: {
            authorization: 'Bearer ' + token
         }
      }).then(res => setCarrinho(res.data[0]))
   }, [token, setCarrinho, usuario._id])

   function removerItem(id) {
      api.patch(`/carrinho/${usuario._id}/${id}`, {
         produto: { idProduto: id }
      },
         {
            headers: {
               authorization: 'Bearer ' + token
            }
         }).then(res => setCarrinho(res.data[0]))
   }

   return (

      <main className={styles.cart_container}>
         {carrinho !== undefined && _carrinho[0].produtos.length > 0 ? (
            <>
               <table className={styles.content_table}>
                  <thead>
                     <th>Produto</th>
                     <th>Preço</th>
                     <th></th>
                  </thead>
                  {_carrinho[0].produtos.map(produto =>
                     <Table
                        id={produto._id}
                        nomeProduto={produto.name}
                        precoProduto={produto.price}
                        linkImgProduto={produto.linkImg}
                        handleRemover={removerItem}
                     />
                  )}
               </table>
               <table className={styles.price_container}>
                  <tbody>
                     <tr>
                        <td>Subtotal</td>
                        <td>R$00,00</td>
                     </tr>
                     <tr>
                        <td>Entrega</td>
                        <td>Calcular</td>
                     </tr>
                     <tr>
                        <td>Total</td>
                        <td>R$00,00</td>
                     </tr>
                  </tbody>

               </table>
               <div className='mb-5'>
                  <Link to={'/'}>
                     <Button conteudoBtn='Adicionar mais itens' />
                  </Link>
                  <Link to={'/Pagamento'}><Button conteudoBtn='Finalizar compra' /></Link>
               </div>
            </>
         ) : (
            <h1>Sem produtos no carrinho</h1>
         )}

      </main>
   )
}