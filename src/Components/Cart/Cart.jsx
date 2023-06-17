import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
  const { carrito, VaciarCarrito, total, CantidadTotal } =
    useContext(CarritoContext);
  if (CantidadTotal === 0) {
    return (
      <div className="ContainerCart">
        <h2>No hay productos en el carrito</h2>
        <Link className="ver-productos" to="/">Ver productos</Link>
      </div>
    );
  }
  return (
    <div className="ContainerCart">
      {carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}
      <h3>Total: ${total}</h3>
      <h3>Cantidad Total: {CantidadTotal}</h3>
      <button onClick={() => VaciarCarrito()}>Vaciar carrito</button>
      <Link className="finalizar-compra" to="/chekout">Finalizar Compra</Link>
    </div>
  );
};

export default Cart;
