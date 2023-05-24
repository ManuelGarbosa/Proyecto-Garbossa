import './CartWidget.css';
import miImagen from "./carrito.png"

const CartWidget = () => {
    const imgCarrito = "https://static.vecteezy.com/system/resources/previews/004/458/418/non_2x/shopping-cart-flat-linear-long-shadow-icon-add-to-cart-sign-line-symbol-vector.jpg"
  return (
    <div>
        <img src={miImagen} alt="Carrito de compras" />
        <p>9</p>
    </div>
  )
}

export default CartWidget