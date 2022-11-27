import axios from "axios";

const { atom, selector } = require("recoil");


export const seekProductState = atom({
    key: 'seekProductState',
    default: ''
})


export const productState = atom({
    key: 'productState',
    default: 'Sem produto'
})

export const users = selector({
    key: 'users',
    get: async () =>{
        try{
            const response = await axios('http://localhost:5000/cadastros')
            return response.data || []
        } catch(error){
            console.log(error)
            return []
        }
    }
})

// Recebe os itens cadastrados no banco de dados
export const products = selector({
    key: 'products',
    get: async () => {
        try {
            const resp = await axios('http://localhost:5000/products')
            return resp.data || []
        } catch (error) {
            console.log(error)
            return []
        }
    }
})