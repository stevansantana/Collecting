import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home/Home';
import Produto from './components/pages/Produto/Produto';
import NovoProduto from './components/pages/NovoProduto/NovoProduto';


function App() {

  let [data, setData] = useState({})

  function recebeDados(DATA) {
    setData(DATA)
  }


  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home sobeDados={recebeDados} />} />
        <Route path='/product/:id' element={<Produto data={data} />} />
        <Route path='/new-product' element={<NovoProduto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
