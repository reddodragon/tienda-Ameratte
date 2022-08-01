import './App.css';
import ResponsiveAppBar from './components/NavBar'
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';
import CheckOut from './components/CheckOut.jsx';




function App() {

  return (
    

    
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/categoria/:idCat" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
