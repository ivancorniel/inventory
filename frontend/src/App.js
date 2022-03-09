import {Routes, Route} from 'react-router-dom';
import Headers from './components/Header';
import Products from './components/Products';
import Transactions from './components/Transactions';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
import AddTransaction from './components/AddTransaction'

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/add_product' element={<AddProduct />} />
        <Route path='/add_transaction' element={<AddTransaction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
