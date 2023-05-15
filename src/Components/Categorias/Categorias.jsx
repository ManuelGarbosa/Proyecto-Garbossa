import { useState, useEffect } from "react";

const Categorias = () => {
  const [Categoria, setCategoria] = useState("");

  useEffect(() => {
    document.title = `categoria: ${Categoria}`;
  }, [Categoria]);

  const handleClick = (categoria) => {
    setCategoria(categoria);
  }

  return (
    <div>
      <h2>Categoria de productos: </h2>
      <button onClick={() => handleClick("Buzos")}> Buzos </button>
      <button onClick={() => handleClick("Camperas")}> Camperas </button>
      <button onClick={() => handleClick("Gorros")}> Gorros </button>
      <button onClick={() => handleClick("Accesorios")}> Accesorios </button>
    </div>
  )
}

export default Categorias;
