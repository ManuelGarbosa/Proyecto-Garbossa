import './App.css';
import Contador from './Components/Contador/Contador';
import Categorias from './Components/Categorias/Categorias';
import UseRef from './Components/UseRef/UseRef';
import Promesas from './Components/Promesas/Promesas';
function App() {
  return (
    <>
      <h1> Clase 5</h1>
      <Contador inicial={1} Stock={10}/>
      <Categorias/>
      <UseRef/>
    </>
    
    
  );
}

export default App;
