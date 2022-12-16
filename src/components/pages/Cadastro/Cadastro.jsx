import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form'
import './Cadastro.modules.css'
import { Link } from 'react-router-dom';
import { apiSign } from '../../../apiEndpoints';


export default function Cadastro() {

   const { register, handleSubmit, formState: { errors }, reset, trigger, } = useForm()

   const onSubmit = (data) => {
      const userData = {
         name: data.nomeCompleto,
         email: data.email,
         password: data.senha,
         confirmPassword: data.confirmarSenha
      }
      console.log(userData)
      apiSign.post('/signup', userData)
      reset()
   }

   const onError = (errors) => {
      console.log(errors)
   }

   return (

      <Container className='mb-5 mt-5 ' >

         <Form className=' bg-dark border border-dark p-5 rounded text-white' onSubmit={handleSubmit(onSubmit, onError)}>

            <h1 className='text-primary text-center mb-3 fst-italic'>CADASTRO</h1>

            <Row>

               <Form.Group as={Col}>
                  <Form.Label className='mt-5 text-light'>Nome Completo</Form.Label>
                  <Form.Control className='border border-2 border-dark' type="text" placeholder='Digite seu nome completo' {...register("nomeCompleto", { required: "Por favor, digite seu nome completo" })}
                     onKeyUp={() => {
                        trigger("nomeCompleto")
                     }}></Form.Control>
                  {errors.nomeCompleto && (<small className="text-danger">{errors.nomeCompleto.message}</small>)}
               </Form.Group>

               <Form.Group as={Col}>
                  <Form.Label className='mt-5 text-light'>CPF</Form.Label>
                  <Form.Control className='border border-2 border-dark' maxLength={11} type="text" placeholder='Digite seu CPF' {...register("cpf", {
                     required: "Por favor, digite seu CPF",
                     pattern: {
                        value: /^[0-9]*$/,
                        message: "Use somente números"
                     },
                     minLength: {

                        value: 11,
                        message: "CPF inválido"
                     },
                     maxLength: {

                        value: 11,
                        message: "CPF inválido"
                     }
                  })}
                     onKeyUp={() => {
                        trigger("cpf")
                     }}></Form.Control>
                  {errors.cpf && (<small className="text-danger">{errors.cpf.message}</small>)}
               </Form.Group>

            </Row>
            <Row>
               <Form.Group as={Col}>
                  <Form.Label className='mt-5 text-light'>E-mail</Form.Label>
                  <Form.Control className='border border-2 border-dark' type="email" placeholder='Informe seu e-mail' {...register("email", {
                     required: "Por favor, digite seu e-mail",
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "E-mail inválido"
                     }
                  })}
                     onKeyUp={() => {
                        trigger("email")
                     }}></Form.Control>
                  {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
               </Form.Group>

               <Form.Group as={Col}>
                  <Form.Label className='mt-5 text-light'>Celular</Form.Label>
                  <Form.Control className='border border-2 border-dark' maxLength={11} type="tel" placeholder='Digite seu número de celular' {...register("celular", {
                     required: "Por favor, informe seu número de celular",
                     pattern: {
                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-.]*(\d{4})(?: *x(\d+))?\s*$/,
                        message: "Use somente número juntamente com o DDD"
                     }
                  })}
                     onKeyUp={() => {
                        trigger("celular")
                     }}></Form.Control>
                  {errors.celular && (<small className="text-danger">{errors.celular.message}</small>)}

               </Form.Group>

            </Row>
            <Row>
               <Form.Group as={Col}>
                  <Form.Label className='mt-5 text-light'>Senha</Form.Label>
                  <Form.Control className='border border-2 border-dark' type="password" placeholder='Defina sua senha' {...register("senha", { required: "Por favor, defina sua senha" })}
                     onKeyUp={() => {
                        trigger("senha")
                     }}></Form.Control>
                  {errors.senha && (<small className="text-danger">{errors.senha.message}</small>)}
               </Form.Group>

               <Form.Group as={Col}>
                  <Form.Label className='mt-5 text-light'>Confirmar Senha</Form.Label>
                  <Form.Control className='border border-2 border-dark' type="password" placeholder='Confirme sua senha'  {...register("confirmarSenha", { required: "Por favor, confirme sua senha" })}
                     onKeyUp={() => {
                        trigger("confirmarSenha")
                     }}></Form.Control>
                  {errors.confirmarSenha && (<small className="text-danger">{errors.confirmarSenha.message}</small>)}

               </Form.Group>

            </Row>

            <Form.Group className='mt-5'>

               <Link to={'/Login'}><Button className="btn btn-danger me-3">Login</Button></Link>
               <Button className="btn btn-success" type="submit">Cadastrar</Button>

            </Form.Group>
         </Form>

      </Container>

   )
}