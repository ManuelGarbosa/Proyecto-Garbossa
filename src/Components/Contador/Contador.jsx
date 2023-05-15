import { useState, useEffect } from "react";

const Contador = ({ Stock, inicial }) => {
  const [Contador, setContador] = useState(inicial);
  const [color, setColor] = useState ("black");

  useEffect( ()=>{
    console.log(" se ejecuto el use effect");

    // if(Contador === 5){
    //    document.getElementById("boton").style.color = "red"
    // }

    if (Contador > 5) {
        setColor("red");
    }
    else {
        setColor("black");
    }

    document.title = `Contador: ${Contador}`;

  }, [Contador])

  const agregarAlCarrito = () => {
    console.log (`Agregado ${Contador} items`)
  }

  const aumentarContador = () => {
    if (Contador < Stock) {
      setContador(Contador + 1);
    }
  };

  const disminuirContador = () => {
    if (Contador > inicial) {
      setContador(Contador - 1);
    }
  };

  return (
    <div>
      <button onClick={disminuirContador}> - </button>
      <strong> {Contador} </strong>
      <button onClick={aumentarContador}> + </button>
      <br />
      <button onClick={agregarAlCarrito} id="boton" style={{color:color}}> Agregar al carrito</button>
    </div>
  );
};

export default Contador;
 