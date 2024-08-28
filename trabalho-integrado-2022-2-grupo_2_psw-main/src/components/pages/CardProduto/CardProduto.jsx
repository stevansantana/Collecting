import styles from './CardProduto.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { listaProdutos, usuarioLogadoState } from '../../../atoms'

export default function CardProduto({ nome, valor, id, handleCart, handleRemove }) {

   const produtos = useRecoilValue(listaProdutos)
   const usuario = useRecoilValue(usuarioLogadoState)
   const navigate = useNavigate()

   function remove(e) {
      e.preventDefault()
      handleRemove(id)
   }

   function adicionarAoCarrinho(e) {

      if(!usuario)
      {
         alert('É preciso estar logado para efetuar uma compra!')
         navigate('/Login')
      }
      e.preventDefault()
      handleCart(id)
      alert('Produto adicionado ao carrinho.')
      navigate('/cart')
   }



   return (
      <div className={styles.card_container}>
         <Link
            to={`/product/${id}`}
            style={{ textDecoration: 'none', color: 'black' }}>
            <img
               src={produtos.filter(produtos => produtos._id === id).map(produtos => produtos.linkImg)[0]}
               alt="Imagem do produto"
               width={200}
            />
            <h3>{nome}</h3>
            <h3>R${valor}</h3>
         </Link>
         <button onClick={adicionarAoCarrinho}>Comprar</button>
         <button onClick={remove}>Remover</button>
      </div>
   )
}