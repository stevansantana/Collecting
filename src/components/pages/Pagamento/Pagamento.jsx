import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from 'react-hook-form'
import Pix from '../../../assets/pix.png'
import styles from './Pagamento.module.css'
import { Link, useNavigate } from "react-router-dom";

export default function Pagamento(){

    const { register, handleSubmit, formState: { errors }, reset, trigger, watch} = useForm()

    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        reset()
        alert('Compra realizada com sucesso!')
        navigate('/')
    }

    const onError = (errors) => {
        console.log(errors)
    }
    console.log(watch())

    return(
        <>
            <div id={styles.mainTitle}>
                <div id={styles.firstTitle}>
                    <h1>PAGAMENTO</h1>
                </div>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit, onError)}>

                <div className="container">

                    <p className='mt-5 mb-5 fs-2 fst-italic'>INFORME OS DADOS DO SEU ENDEREÇO</p>

                    <div className="row">

                        <div className="col mt-2">
                            <label className="form-label mt-3">CEP</label>
                            <input className="form-control border border-secondary rounded-pill" type="text" maxLength={8} {...register("cep", {required: "Por favor, informe o seu CEP",
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

                        <div className="col mt-2">
                            <label className="form-label mt-3">Endereço</label>
                            <input className="form-control border border-secondary rounded-pill" type="text" {...register("endereco", {required: "Por favor, informe o seu endereço"})}
                             onKeyUp={() =>{
                                trigger("endereco")
                            }}></input>
                            {errors.endereco && (<small className="text-danger">{errors.endereco.message}</small>)}
                        </div>

                    </div>

                    <div className="row">

                        <div className="col">
                            <label className="form-label mt-3">Complemento</label>
                            <input className="form-control border border-secondary rounded-pill" type="text" {...register("complemento", {required: "Por favor, informe o complemento de seu endereço"})}
                             onKeyUp={() =>{
                                trigger("complemento")
                            }}></input>
                            {errors.complemento && (<small className="text-danger">{errors.complemento.message}</small>)}
                        </div>

                        <div className="col">
                            <label className="form-label mt-3">Número</label>
                            <input className="form-control border border-secondary rounded-pill" type="number" {...register("numero", {required: "Por favor, informe o número de seu endereço",
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
                            <input className="form-control border border-secondary rounded-pill" type="text" {...register("cidade", {required: "Por favor, informe a sua cidade",
                            minLength: {
                                value: 3,
                                message: "Cidade inválida"
                            }})}
                            onKeyUp={() =>{
                                trigger("cidade")
                            }}></input>
                            {errors.cidade && (<small className="text-danger">{errors.cidade.message}</small>)}
                        </div>

                        <div className="col mb-4">
                            <label className="form-label mt-3">Estado</label>
                            <select className="form-control border border-secondary rounded-pill" {...register("estado", {required: "Por favor, informe o seu estado"})}
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

                    <p className='mt-5 mb-5 fs-2 fst-italic'>MEIO DE PAGAMENTO</p>

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