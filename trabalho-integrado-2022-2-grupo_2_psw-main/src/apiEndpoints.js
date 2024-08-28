import axios from "axios";

export const api = axios.create({
    baseURL: `http://localhost:5000/`
})

export const apiProducts = axios.create({
    baseURL: `http://localhost:5000/produtos`
})

export const apiSign = axios.create({
    baseURL: 'http://localhost:5000/users'
})