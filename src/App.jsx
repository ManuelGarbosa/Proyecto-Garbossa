import './App.css';
import Contador from './Components/Contador/Contador';
import Categorias from './Components/Categorias/Categorias';
import UseRef from './Components/UseRef/UseRef';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Promesas from './Components/Promesas/Promesas';
import Fetch from './Components/Fetch/Fetch';
function App() {
  return (
    <>
      <h1> Clase 5</h1>
       <Contador inicial={1} Stock={10}/>
      <Categorias/>
      <UseRef/> 
      <ItemListContainer greeting="Productos"/>
      {/* <Promesas/>
      <Fetch/> */}
    </>
    
    
  );
}

export default App;
