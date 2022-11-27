import axios from "axios";

export const apiProducts = axios.create({
    baseURL: `http://localhost:5000/products`
})

export const apiSign = axios.create({
    baseURL: 'http://localhost:5000/cadastros'
})