import axios from "axios";


const { atom, selector } = require("recoil");


export const seekProductState = atom({
    key: 'seekProductState',
    default: ''
})


export const productState = atom({
    key: 'productState',
    default: []
})

export const users = selector({
    key: 'users',
    get: async () => {
        try {
            const response = await axios('http://localhost:5000/cadastros')
            return response.data || []
        } catch (error) {
            console.log(error)
            return []
        }
    }
})

export const listaProdutos = atom({
    key: 'listaProdutos',
    default: []
})
