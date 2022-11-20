import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home/Home';
import Produto from './components/pages/Produto/Produto';
import NovoProduto from './components/pages/NovoProduto/NovoProduto';
import Chat from './components/pages/Chat/Chat';
import "./style.scss";
import Carrinho from './components/pages/Carrinho/Carrinho'
import Cadastro from './components/pages/Cadastro/Cadastro'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/product/:id' element={<Produto />} />
        <Route path='/new-product' element={<NovoProduto />} />
        <Route path='/sign-up' element={<Cadastro />} />
        <Route path='/Chat' element={<Chat />} />

        <Route path='/cart' element={<Carrinho />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
