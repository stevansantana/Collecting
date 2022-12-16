const { atom } = require("recoil");


export const seekProductState = atom({
   key: 'seekProductState',
   default: ''
})

export const usuarioLogadoState = atom({
   key: 'usuarioLogado',
   default: undefined
})


export const productState = atom({
   key: 'productState',
   default: []
})

export const usersState = atom({
   key: 'usersState',
   default: []
})

export const listaProdutos = atom({
   key: 'listaProdutos',
   default: []
})

export const carrinhoState = atom({
   key: 'carrinhoProdutos',
   default: []
})



