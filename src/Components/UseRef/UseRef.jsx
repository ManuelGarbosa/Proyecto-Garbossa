import { useRef } from "react";

// UseRef es un hook que me permite crear una referencia mutable que puede ser actualizada sin provocar una nueva renderizacion del componente.

const UseRef = () => {
  const contadorCarrito = useRef(0);

  //Este hook me retorna un objeto  cpon la propiedad " current" la cual podemos mutar

  function agregarAlCarrito() {
    contadorCarrito.current = contadorCarrito.current + 1;
    console.log( contadorCarrito.current);
  }

  return (
    <div>
      <h3>Porductos en el carrito: numProductos</h3>
      <button onClick={agregarAlCarrito  }> Agregar al carrito</button>
    </div>
  );
};

export default UseRef;
