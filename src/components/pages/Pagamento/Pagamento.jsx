import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from 'react-hook-form'
import Pix from '../../../assets/pix.png'
import styles from './Pagamento.module.css'
import { Link } from "react-router-dom";

export default function Pagamento(){

    const { register, handleSubmit, formState: { errors }, reset, trigger, watch} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const onError = (errors) => {
        console.log(errors)
    }
    console.log(watch())

    return(
        <>
            <h1 id={styles.mainTitle}>PAGAMENTO</h1>
            <form onSubmit={handleSubmit(onSubmit, onError)}>

                <div className="container">

                    <p className={styles.titulo}>INFORME SEUS DADOS PESSOAIS</p>

                    <div className="row">

                        <div className="col">
                            <label className="form-label">Nome Completo</label>
                            <input className="form-control" type="text" {...register("nomeCompleto", {required: "Por favor, digite seu nome completo"})}
                            onKeyUp={() =>{
                                trigger("nomeCompleto")
                            }}></input>
                            {errors.nomeCompleto && (<small className="text-danger">{errors.nomeCompleto.message}</small>)}
                        </div>

                        <div className="col">
                            <label className="form-label">CPF</label>
                            <input className="form-control" type="text" maxLength={11} {...register("cpf", {required: "Por favor, digite seu CPF",
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
                            }})}  
                            onKeyUp={() =>{
                                trigger("cpf")
                            }}></input>
                            {errors.cpf && (<small className="text-danger">{errors.cpf.message}</small>)}
                        </div>

                    </div>

                    <div className="row">

                        <div className="col">
                            <label className="form-label mt-3">E-mail</label>
                            <input className="form-control" type="email" {...register("email", {required: "Por favor, digite seu e-mail",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "E-mail inválido"
                            }})}
                            onKeyUp={() =>{
                                trigger("email")
                            }}></input>
                            {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
                        </div>

                        <div className="col">
                            <label className="form-label mt-3">Celular</label>
                            <input className="form-control" type="tel" maxLength={11} {...register("celular", {required: "Por favor, informe seu número de celular",
                            pattern: {
                                    value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-.]*(\d{4})(?: *x(\d+))?\s*$/,
                                    message: "Use somente número juntamente com o DDD"
                            }})}
                            onKeyUp={() =>{
                                trigger("celular")
                            }}></input>
                            {errors.celular && (<small className="text-danger">{errors.celular.message}</small>)}
                        </div>

                    </div>

                    <div className="row">

                        <div className="col">
                            <label className="form-label mt-3">Senha</label>
                            <input className="form-control" type="password" {...register("senha", {required: "Por favor, informe sua senha"})}
                             onKeyUp={() =>{
                                trigger("senha")
                            }}></input>
                            {errors.senha && (<small className="text-danger">{errors.senha.message}</small>)}
                        </div>

                        <div className="col">
                            <label className="form-label mt-3">Confirmar Senha</label>
                            <input className="form-control" type="password" {...register("confirmarSenha", {required: "Por favor, confirme sua senha"})}
                             onKeyUp={() =>{
                                trigger("confirmarSenha")
                            }}></input>
                            {errors.confirmarSenha && (<small className="text-danger">{errors.confirmarSenha.message}</small>)}
                        </div>

                    </div>

                    <p className={styles.titulo}>INFORME OS DADOS DO SEU ENDEREÇO</p>

                    <div className="row">

                        <div className="col">
                            <label className="form-label mt-3">CEP</label>
                            <input className="form-control" type="text" maxLength={8} {...register("cep", {required: "Por favor, informe o seu CEP",
                            pattern:{
                                value: /^[0-9]*$/,
                                message: "Use somente números"
                            },
                            minLength: {

                                value: 8,
                                message: "CEP inválido"
                            },
                            maxLength: {

                                value: 8,
                                message: "CEP inválido"
                            }
                            })}
                            onKeyUp={() =>{
                                trigger("cep")
                            }}></input>
                            {errors.cep && (<small className="text-danger">{errors.cep.message}</small>)}
                        </div>

                        <div className="col">
                            <label className="form-label mt-3">Endereço</label>
                            <input className="form-control" type="text" {...register("endereco", {required: "Por favor, informe o seu endereço"})}
                             onKeyUp={() =>{
                                trigger("endereco")
                            }}></input>
                            {errors.endereco && (<small className="text-danger">{errors.endereco.message}</small>)}
                        </div>

                    </div>

                    <div className="row">

                        <div className="col">
                            <label className="form-label mt-3">Complemento</label>
                            <input className="form-control" type="text" {...register("complemento", {required: "Por favor, informe o complemento de seu endereço"})}
                             onKeyUp={() =>{
                                trigger("complemento")
                            }}></input>
                            {errors.complemento && (<small className="text-danger">{errors.complemento.message}</small>)}
                        </div>

                        <div className="col">
                            <label className="form-label mt-3">Número</label>
                            <input className="form-control" type="number" {...register("numero", {required: "Por favor, informe o número de seu endereço",
                            pattern: {
                                value: /^[0-9]*$/,
                                message: "Use somente números"
                            }})}
                            onKeyUp={() =>{
                                trigger("numero")
                            }}></input>
                            {errors.numero && (<small className="text-danger">{errors.numero.message}</small>)}
                        </div>

                    </div>

                    <div className="row">

                        <div className="col">
                            <label className="form-label mt-3">Cidade</label>
                            <input className="form-control" type="text" {...register("cidade", {required: "Por favor, informe a sua cidade",
                            minLength: {
                                value: 3,
                                message: "Cidade inválida"
                            }})}
                            onKeyUp={() =>{
                                trigger("cidade")
                            }}></input>
                            {errors.cidade && (<small className="text-danger">{errors.cidade.message}</small>)}
                        </div>

                        <div className="col">
                            <label className="form-label mt-3">Estado</label>
                            <select className="form-control" {...register("estado", {required: "Por favor, informe o seu estado"})}
                            onKeyUp={() =>{
                                trigger("estado")
                            }}>
                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>AM</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>DF</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option> 
                            </select>
                            {errors.estado && (<small className="text-danger">{errors.estado.message}</small>)}
                        </div>

                    </div>

                    <p className={styles.titulo}>MEIO DE PAGAMENTO</p>

                    <p id={styles.pixTitulo}>PIX</p>
                    <img className={styles.imagem} src={Pix} alt="Pix"></img>

                    <div className="mt-5 mb-5">
                       
                        <Link to={'/cart'}><button className="btn btn-primary me-3" href="#">Retornar ao Carrinho</button></Link>
                        <button className="btn btn-success" type="submit">Finalizar Compra</button>

                    </div>
                </div>

            </form>

        </>
    )
}