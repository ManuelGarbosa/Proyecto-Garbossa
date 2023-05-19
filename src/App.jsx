import './App.css';
import Contador from './Components/Contador/Contador';
import Categorias from './Components/Categorias/Categorias';
import UseRef from './Components/UseRef/UseRef';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Promesas from './Components/Promesas/Promesas';
import Fetch from './Components/Fetch/Fetch';
import AsyncAwait from './Components/Fetch/AsyncAwait';
import Simpsons from './Components/Fetch/Simpsons';
import Netflix from './Components/Fetch/Netflix';
function App() {
  return (
    <>
      <h1> Clase 5</h1>
       {/* <Contador inicial={1} Stock={10}/>
      <Categorias/>
      <UseRef/> 
      <ItemListContainer greeting="Productos"/> 
       <Promesas/>
      <Fetch/> 
       <AsyncAwait/>
      <Simpsons/> */}
      <Netflix/>
    </>
    
    
  );
}

export default App;
