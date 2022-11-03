

export default function Produto({data}) {

    const productData = data



    return (
        <div>
            <img src={productData.linkImg} alt="" />
            <h1>{`${productData.nome} ${productData.id}`}</h1>
            <h1>R${productData.valor}</h1>
            <button>Comprar</button>
        </div>
    )
}