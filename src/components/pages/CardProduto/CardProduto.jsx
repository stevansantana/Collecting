import styles from './CardProduto.module.css'
import { Link } from 'react-router-dom'
import Button from '../../layout/Button/Button'
import { useRecoilValue } from 'recoil'
import { listaProdutos } from '../../../atoms'

export default function CardProduto({ nome, valor, id, handleCart, handleRemove }) {

   const produtos = useRecoilValue(listaProdutos)

   function remove(e) {
      e.preventDefault()
      handleRemove(id)
   }

   function adicionarAoCarrinho(e) {
      e.preventDefault()
      handleCart(id)
      alert('Produto adicionado ao carrinho.')
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