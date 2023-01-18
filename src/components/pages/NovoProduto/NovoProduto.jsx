import styles from './NovoProduto.module.css'
import Button from '../../layout/Button/Button'
import Input from '../../form/Input/Input'
import { useState } from 'react'
import { api } from '../../../apiEndpoints'
import { useRecoilState, useRecoilValue } from 'recoil'
import { listaProdutos, tokenState, usuarioLogadoState } from '../../../atoms'
import { useNavigate } from 'react-router-dom'


export default function NovoProduto() {


   const [productName, setProductName] = useState()
   const [productPrice, setProductPrice] = useState()
   const [imgProduto, setImgProduto] = useState()
   const token = useRecoilValue(tokenState)
   const usuario = useRecoilValue(usuarioLogadoState)
   // eslint-disable-next-line no-unused-vars
   const [produtos, setProdutos] = useRecoilState(listaProdutos)
   const navigate = useNavigate()

   const handleImage = (e) => {
      const arquivo = e.target.files[0]
      setToFileBase(arquivo)
   }

   const setToFileBase = (arquivo) => {
      const leitor = new FileReader()
      leitor.readAsDataURL(arquivo)
      leitor.onloadend = () => {
         setImgProduto(leitor.result)
      }
   }

   function postProduct() {
      const postFunction = async () => {
         try {
            const novoProduto = {
               linkImg: imgProduto || "https://via.placeholder.com/200",
               name: productName || 'Sem nome',
               price: productPrice || 0
            }
            await api.post(`/produtos/${usuario._id}`, novoProduto, {
               headers: {
                  authorization: 'Bearer ' + token
               }
            })
         } catch (error) {
            console.log(error)
         }
      }
      postFunction()
      navigate('/')
   }


   return (
      <main className={styles.form_container}>
         <form action="">
            <div>
               {/* <img src="https://via.placeholder.com/500" alt="Sua imagem" /><br />
                    <input type="file" /> */}
               <img src={imgProduto} alt="Imagem do produto" />
            </div>
            <div className={styles.form_input_container}>
               <input type="file" onChange={handleImage} />
               <Input
                  texto='Nome do produto'
                  nome='nomeProduto'
                  tipo='text'
                  handleOnChange={(e) => setProductName(e.target.value)} />

               <Input
                  texto="Valor do produto"
                  nome="custoProduto"
                  tipo="number"
                  handleOnChange={(e) => setProductPrice(e.target.value)} />

               <Button
                  conteudoBtn='Postar produto'
                  handleClick={postProduct} />
            </div>

         </form>
      </main>
   )
}