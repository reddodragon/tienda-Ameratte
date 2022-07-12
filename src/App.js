import './App.css';
import ResponsiveAppBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';
import TestConsulta from './firebase/testConsulta';
import TestConsultaColeccion from './firebase/TestConsultaColeccion';



function App() {
  //itemListContainer
  //category
  //itemDetailContainer
  return (
    

    
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/testconsulta" element={<TestConsulta/>}/>
          <Route path="/TestConsultaColeccion" element={<TestConsultaColeccion/>}/>
        </Routes>

        <div></div>
      </BrowserRouter>
  );
}

export default App;
