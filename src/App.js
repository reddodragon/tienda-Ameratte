import './App.css';
import ResponsiveAppBar from './components/NavBar'
import ItemListContainer from './components/Container'
import MyPromise from './components/Promise'
import CatsContainer from './components/CatsContainer'

function App() {
  return (

    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      
      <ItemListContainer></ItemListContainer>
      <MyPromise></MyPromise>
      <CatsContainer></CatsContainer>
    </div>
  );
}

export default App;
