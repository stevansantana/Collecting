
export default function NovoProduto() {

    return (
        <main>
            <form action="">
                <div>
                    <img src="https://via.placeholder.com/500" alt="Sua imagem" /><br />
                    <input type="file"  />
                </div>
                <label htmlFor="product-name">Nome do produto</label><br />
                <input type="text" id="product-name"/><br />
                <label htmlFor="product-cost">Valor do produto</label><br />
                <input type="number" /><br />
                <button>Postar produto</button>

            </form>
        </main>
    )
}