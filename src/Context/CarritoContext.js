import { useState, createContext } from "react";

export const CarritoContext = createContext({ 
  carrito: [],
  total: 0,
  CantidadTotal: 0
});

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0)
  const [CantidadTotal, setCantidadTotal] = useState(0);

  const AgregarProducto = (item, cantidad) => {
    const ProductoExistente = carrito.find(prod => prod.item.id === item.id);

    if (!ProductoExistente) {
      setCarrito(prev => [...prev, {item, cantidad}]);
      setCantidadTotal(prev => prev + cantidad);
      setTotal(prev => prev + (item.precio * cantidad));
    } else {
        const CarritoActualizado = carrito.map(prod => {
            if(prod.item.id === item.id) {
                return {...prod, cantidad: prod.cantidad + cantidad};
            } else{
                return prod;
            }
        });
        setCarrito(CarritoActualizado);
        setCantidadTotal(prev => prev + cantidad);
      setTotal(prev => prev + (item.precio * cantidad));
    }
  };

  const EliminarProducto = (id) => {
    const ProductoEliminado = carrito.find(prod => prod.item.id === id);
       const CarritoActualizado = carrito.filter(prod => prod.item.id !== id);
       setCarrito(CarritoActualizado);
       setCantidadTotal(prev => prev - ProductoEliminado.cantidad);
       setTotal(prev => prev - (ProductoEliminado.item.precio * ProductoEliminado.cantidad));
  }

  const VaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0);
  }
  return (
    <CarritoContext.Provider value={{carrito, AgregarProducto, EliminarProducto, VaciarCarrito, total, CantidadTotal}}>
        {children}
    </CarritoContext.Provider>
  )
};
