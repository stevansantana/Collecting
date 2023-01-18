import { useRecoilState, useRecoilValue } from "recoil";
import {
  seekProductState,
  listaProdutos,
  usuarioLogadoState,
  tokenState,
} from "../../../atoms";
import CardProduto from "../CardProduto/CardProduto";
import styles from "./Home.module.css";
import { api } from "../../../apiEndpoints";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [produtos, setProdutos] = useRecoilState(listaProdutos);
  const usuario = useRecoilValue(usuarioLogadoState);
  const token = useRecoilValue(tokenState);
  const productoBuscado = useRecoilValue(seekProductState);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      await api
        .get("/produtos")
        .then((resp) => resp.data)
        .then((data) => setProdutos(data));
    };
    getProducts();
  }, [setProdutos]);

    function removeProducts(id) {
      const produto = produtos.filter((produto) => produto._id === id)[0];
      console.log(produto);

      if(!usuario)
      {
         alert('Você precisa estar logado!')
         navigate('/Login')
      }

      if(produto.userId === usuario._id)
      {
         api.delete(`produtos/${usuario._id}/${id}`, {
            headers: {
               authorization: 'Bearer ' + token
            }
         });
         alert('Produto removido.')
      }
      else
      {
         alert('Você não cadastrou este produto, logo não pode removê-lo.')
      }

    //window.location.reload(false)
  }

  function adicionarAoCarrinho(id) {
    api.patch(
      `carrinho/${usuario._id}`,
      {
        produtos: {
          idProduto: id,
          name: produtos.filter((produto) => produto._id === id)[0].name,
          price: produtos.filter((produto) => produto._id === id)[0].price,
          linkImg: produtos.filter((produto) => produto._id === id)[0].linkImg,
        },
      },
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
  }

  function redirect() {
    if (usuario) {
      navigate("/new-product");
    } else {
      alert("Voce deve estar logado!");
      navigate("/Login");
    }
  }

  return (
    <main className={styles.products_container}>
      <div className={styles.redirect_button}>
        <button onClick={redirect}>Adicionar produto</button>
      </div>
      {/* Verifica se tem algum produto cadastrado e renderiza os produtos */}
      <div className={styles.card_container}>
        {produtos.length > 0 ? (
          produtos
            .filter((value) => {
              if (productoBuscado === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(productoBuscado.toLowerCase())
              ) {
                return value;
              }
              return value;
            })
            .map((produto) => (
              <CardProduto
                linkImg={produto.linkImg}
                nome={produto.name}
                valor={produto.price}
                key={produto._id}
                id={produto._id}
                handleRemove={removeProducts}
                handleCart={adicionarAoCarrinho}
              />
            ))
        ) : (
          <h1>Não há produtos cadastrados :(</h1>
        )}
      </div>
    </main>
  );
}
