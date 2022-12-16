import styles from './CardProduto.module.css'
import { Link } from 'react-router-dom'
import Button from '../../layout/Button/Button'

export default function CardProduto({ nome, valor, id, handleCart, handleRemove }) {


   function remove(e) {
      e.preventDefault()
      handleRemove(id)
   }

   function adicionarAoCarrinho(e) {
      e.preventDefault()
      handleCart()
   }

   return (
      <div className={styles.card_container}>
         <Link
            to={`/product/${id}`}
            style={{ textDecoration: 'none', color: 'black' }}>
            <img
               src="https://via.placeholder.com/200"
               alt="Imagem do produto"
            />
            <h3>{nome}</h3>
            <h3>R${valor}</h3>
         </Link>
         <Button conteudoBtn='Comprar' onClick={adicionarAoCarrinho} />
         <button onClick={remove}>Remover</button>
      </div>
   )
}