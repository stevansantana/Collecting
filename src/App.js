import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home/Home';
import Produto from './components/pages/Produto/Produto';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({})

  function teste(DATA) {
    setData(DATA)
  }


  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home test={teste} />} />
        <Route
          path='/product/:id'
          element={<Produto
            data={data} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
