import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, VaciarCarrito, total, CantidadTotal } =
    useContext(CarritoContext);
  if (CantidadTotal === 0) {
    return (
      <>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Ver productos</Link>
      </>
    );
  }
  return (
    <div>
      {carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}
      <h3>Total: ${total}</h3>
      <h3>Cantidad Total {CantidadTotal}</h3>
      <button onClick={() => VaciarCarrito()}>Vaciar carrito</button>
      <Link to="/chekout">Finalizar Compra</Link>
    </div>
  );
};

export default Cart;
