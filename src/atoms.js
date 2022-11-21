import axios from "axios";

const { atom, selector } = require("recoil");


export const productState = atom({
    key: 'productState',
    default: 'Sem produto'
})

// Recebe os itens cadastrados no banco de dados
export const products = selector({
    key: 'products',
    get: async () =>{
        try{
            const resp = await axios('http://localhost:5000/products')
            return resp.data || []
        } catch(error){
            console.log(error)
            return []
        }
    }
})