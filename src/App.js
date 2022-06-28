import './App.css';
import ResponsiveAppBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/pf/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
        </Routes>

        <div>Footer</div>
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
