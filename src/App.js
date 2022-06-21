import './App.css';
import ResponsiveAppBar from './components/NavBar'
import ItemListContainer from './components/Container'
import MyPromise from './components/Promise'

function App() {
  return (

    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      
      <ItemListContainer></ItemListContainer>
      <MyPromise></MyPromise>
    </div>
  );
}

export default App;
