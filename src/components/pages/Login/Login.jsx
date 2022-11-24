import 'bootstrap/dist/css/bootstrap.min.css'

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {useForm} from 'react-hook-form'

import { Link } from 'react-router-dom';

export default function Login()
{

    const { register, handleSubmit, formState: { errors }, reset, trigger,} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const onError = (errors) => {
        console.log(errors)
    }

    return(

        <>
          <Container className='d-flex justify-content-center align-items-end mb-5 mt-5'>

            <Form className='border border-dark p-5 rounded bg-dark text-white' onSubmit={handleSubmit(onSubmit, onError)}>

                <h1 className='text-primary'>Bem vindo ao Collecting</h1>
                <Form.Group>

                    <Form.Label className='mt-5'>Usuário</Form.Label>
                    <Form.Control type='text' placeholder='Digite seu nome' {...register("usuario", {required: "Por favor, digite seu nome"})}
                            onKeyUp={() =>{
                                trigger("usuario")
                            }}></Form.Control>
                    {errors.usuario && (<small className="text-danger">{errors.usuario.message}</small>)}
                </Form.Group>

                <Form.Group>

                    <Form.Label className='mt-5'>Senha</Form.Label>
                    <Form.Control type='password' placeholder='Digite sua senha' {...register("senha", {required: "Por favor, informe sua senha"})}
                             onKeyUp={() =>{
                                trigger("senha")
                            }}></Form.Control>
                    {errors.senha && (<small className="text-danger">{errors.senha.message}</small>)}
                </Form.Group>

                <Form.Group>

                    <Form.Control className='btn btn-primary mt-5' type='submit' value='Login'></Form.Control>

                </Form.Group>

                 <Form.Group  className='d-flex mt-3'>

                    <p className='mt-3'>Não tem conta?</p>
                    <Link to={'/sign-up'} className='mt-3 ms-3 text-decoration-none'>Cadastre-se</Link>

                </Form.Group>
                 
            </Form>

          </Container>
        </>
    )
}