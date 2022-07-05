import './App.css';
import ResponsiveAppBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';

function App() {
  //itemListContainer
  //category
  //itemDetailContainer
  return (

    <div className="App">

      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>

        <div></div>
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
