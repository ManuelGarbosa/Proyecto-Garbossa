import { useState, useEffect } from "react";
//ARRAY DE PRODUCTOS

const misProductos = [
  { nombre: "PC gamer", precio: 1500 },
  { nombre: "teclado", precio: 500 },
  { nombre: "mouse", precio: 200 },
];

const getMisproductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 2000);
  });
};

const AsyncAwait = () => {
  const [misProductos, setMisProductos] = useState([]);
  useEffect(() => {
    console.log(getMisproductos());

     const pedirDatos = async () => {
        const inventarioProductos = await getMisproductos();
    setMisProductos(inventarioProductos);
     }

     pedirDatos();

  }, []);
  return (
  <div>
    <h2>Mis Productos usando AsyncAwait</h2>
    {
        misProductos.map((producto,index) => {
            return (
                <div key={index}>
                    <p> {producto.nombre} </p>
                    <p> {producto.precio} </p>
                </div>
            )
        })
    }
  </div>
  )
};

export default AsyncAwait;
