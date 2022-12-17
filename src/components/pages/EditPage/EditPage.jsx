import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../form/Input/Input'
import Button from '../../layout/Button/Button'
import styles from './EditPage.module.css'
import { listaProdutos } from '../../../atoms'
import { useRecoilState } from 'recoil'
import { api } from '../../../apiEndpoints'

export default function EditPage() {

   const { id } = useParams()
   const [product, setProduct] = useRecoilState(listaProdutos)
   const [newName, setNewName] = useState()
   const [newPrice, setNewPrice] = useState()
   const [novaImgProduto, setNovaImgProduto] = useState()
   const navigate = useNavigate();

   // Get produto pelo id
   useState(() => {
      api.get(`produtos/${id}`)
         .then(resp => setProduct(resp.data))
   }, [])

   // Atualiza os dados do produto
   function updateProduct() {
      api.put(`produtos/${id}`, {
         linkImg: novaImgProduto || product.linkImg,
         name: newName || product.name,
         price: newPrice || product.price
      })
      // Leva para página anterior
      navigate('/')
   }


   const handleNameChange = (e) => {
      setNewName(e.target.value)
   }

   const handlePriceChange = (e) => {
      setNewPrice(e.target.value)
   }

   const handleNewImage = (e) => {
      const arquivo = e.target.files[0]
      setToFileBase(arquivo)
   }

   const setToFileBase = (arquivo) => {
      const leitor = new FileReader()
      leitor.readAsDataURL(arquivo)
      leitor.onloadend = () => {
         setNovaImgProduto(leitor.result)
      }
   }


   return (
      <main className={styles.edit_container}>
         <div>
            {!novaImgProduto && (
               <>
               <img src={product.linkImg} alt="NewImg" width={350} /><br />
               </>
            )}
            {novaImgProduto && (
               <>
               <img src={novaImgProduto} alt="NewImg" width={350} /><br />
               </>
            )}
            <input type="file" onChange={handleNewImage} />
         </div>
         <div>

            <Input
               tipo='text'
               nome='novoNome'
               texto='Novo nome'
               placeholder={product.name}
               handleOnChange={handleNameChange} />

            <Input
               tipo='number'
               nome='novoValor'
               texto='Novo valor'
               placeholder={`R$${product.price}`}
               handleOnChange={handlePriceChange} />
            <Button conteudoBtn='Finalizar' handleClick={updateProduct} />

         </div>
      </main>
   )
}