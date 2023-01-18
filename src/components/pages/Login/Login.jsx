import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form'
import { usersState, usuarioLogadoState, tokenState, carrinhoState } from '../../../atoms'
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { apiSign, api } from '../../../apiEndpoints';
import { useNavigate } from 'react-router-dom'

export default function Login() {

   const { register, handleSubmit, formState: { errors }, trigger, } = useForm()

   const [usuarios, setUsuarios] = useRecoilState(usersState)
   // eslint-disable-next-line no-unused-vars
   const [token, setToken] = useRecoilState(tokenState)
   // eslint-disable-next-line no-unused-vars
   const [carrinho, setCarrinho] = useRecoilState(carrinhoState)
   // eslint-disable-next-line no-unused-vars
   const estadoCarrinho = useRecoilValue(carrinhoState)
   // eslint-disable-next-line no-unused-vars
   const [usuarioLogado, setUsuarioLogado] = useRecoilState(usuarioLogadoState)

   useEffect(() => {
      const getUsuarios = async () => {
         apiSign.get('/')
            .then(resp => resp.data)
            .then(data => setUsuarios(data))
      }
      getUsuarios()
   }, [setUsuarios])

   const navigate = useNavigate()
   const onSubmit = async (data) => {
      
      const { usuario, senha } = data
      const usuarioExiste = usuarios.filter(usuarios => usuarios.email === usuario)[0]
      // eslint-disable-next-line eqeqeq
      if (usuarioExiste == undefined) {
         alert('Usuário não encontrado no sistema')
      }
      // eslint-disable-next-line eqeqeq
      if (usuarioExiste.password != senha) {
         alert('Verifique os dados inseridos')
      }

      const { _id } = usuarioExiste
      await api.post('users/login', { email: usuario, password: senha })
         .then(res => {
            api.get(`carrinho/${_id}`, {
               headers: {
                  authorization: 'Bearer ' + res.data.token
               }
            }).then(res => setCarrinho(res.data[0]))
            
            localStorage.setItem('token', res.data.token)
            setToken(res.data.token)

         })
      setUsuarioLogado(usuarioExiste)
      //reset()

      alert('Usuário logado com sucesso!')
      navigate('/')
   }

   const onError = (errors) => {
      console.log(errors)
   }

   return (
      <Container className='d-flex justify-content-center align-items-end mb-5 mt-5'>

         <Form className='border border-dark p-5 rounded bg-dark text-white' onSubmit={handleSubmit(onSubmit, onError)}>

            <h1 className='text-primary'>Bem vindo ao Collecting</h1>
            <Form.Group>

               <Form.Label className='mt-5'>Usuário</Form.Label>
               <Form.Control type='email' placeholder='Digite seu email' {...register("usuario", { required: "Por favor, digite seu email" })}
                  onKeyUp={() => {
                     trigger("usuario")
                  }}></Form.Control>
               {errors.usuario && (<small className="text-danger">{errors.usuario.message}</small>)}
            </Form.Group>

            <Form.Group>

               <Form.Label className='mt-5'>Senha</Form.Label>
               <Form.Control type='password' placeholder='Digite sua senha' {...register("senha", { required: "Por favor, informe sua senha" })}
                  onKeyUp={() => {
                     trigger("senha")
                  }}></Form.Control>
               {errors.senha && (<small className="text-danger">{errors.senha.message}</small>)}
            </Form.Group>

            <Form.Group>

               <Form.Control className='btn btn-primary mt-5' type='submit' value='Login'></Form.Control>

            </Form.Group>

            <Form.Group className='d-flex mt-3'>

               <p className='mt-3'>Não tem conta?</p>
               <Link to={'/sign-up'} className='mt-3 ms-3 text-decoration-none'>Cadastre-se</Link>

            </Form.Group>

         </Form>

      </Container>
   )
}