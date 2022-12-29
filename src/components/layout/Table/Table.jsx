import styles from './Table.modules.css'

export default function Table({id, nomeProduto, precoProduto, linkImgProduto, handleRemover}) {

   function remover(){
      handleRemover(id)
   }

   return (
      <>
         <tbody className={styles.produto} id={id}>
            <td><img
               src={linkImgProduto}
               alt="Imagem do produto"
               width={200}
            /><h3>{nomeProduto}</h3></td>
            <td>R${precoProduto}</td>
            <td><button onClick={remover}>Remover</button></td>
         </tbody>

      </>
   )
}