import React from 'react';
import { Link } from "react-router-dom";
import Button from '../../layout/Button/Button'
import styles from './Carrinho.module.css'


export default function Carrinho() {

    return (

        <main className={styles.cart_container}>
            <table className={styles.content_table}>
                <thead>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th></th>
                </thead>
                <tbody>
                    <td><img
                    src="https://via.placeholder.com/200"
                    alt="Imagem do produto"
                /><h3>Produto 1</h3></td>
                <td>R$00,00</td>
                <td><a href="#">Remover</a></td>
                </tbody>
            </table>

            <table className={styles.price_container}>
            <tbody>    
                <tr>
                    <td>Subtotal</td>
                    <td>R$00,00</td>
                </tr>
                <tr>
                    <td>Entrega</td>
                    <td><a href="#">Calcular</a></td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>R$00,00</td>
                </tr>
            </tbody>

            </table>

            <div>
                <Link to={'/'}>
                    <Button conteudoBtn='Adicionar mais itens' />
                </Link>
                <Button conteudoBtn='Finalizar compra' />
            </div>

        </main>
    )
}