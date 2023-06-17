import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext";
import "./CartItem.css"


const CartItem = ({item, cantidad}) => {
    const {EliminarProducto} = useContext(CarritoContext);

  return (
    <div className="ContainerCartItem">
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {item.precio}</p>
        <button onClick={() => EliminarProducto(item.id)}> Eliminar</button>
    </div>
  )
}

export default CartItem