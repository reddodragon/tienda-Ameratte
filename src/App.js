import './App.css';
import ResponsiveAppBar from './components/NavBar'
import ItemListContainer from './components/Container'

function App() {
  return (

    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <ItemListContainer greeding={"Hola como estas componente"}></ItemListContainer>
    </div>
  );
}

export default App;
