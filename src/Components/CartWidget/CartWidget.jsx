import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import miImagen from "./carrito.png";

const CartWidget = () => {
  const { CantidadTotal } = useContext(CarritoContext);

  const imgCarrito =
    "https://static.vecteezy.com/system/resources/previews/004/458/418/non_2x/shopping-cart-flat-linear-long-shadow-icon-add-to-cart-sign-line-symbol-vector.jpg";
  return (
    <div>
      <Link to="/cart">
        <img src={miImagen} alt="Carrito de compras" />
        {CantidadTotal > 0 && <span> {CantidadTotal} </span>}
      </Link>
    </div>
  );
};

export default CartWidget;
