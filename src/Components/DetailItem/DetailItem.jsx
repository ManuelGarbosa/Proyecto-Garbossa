import "./DetailItem.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";

const DetailItem = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { AgregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    AgregarProducto(item, cantidad);
  };
  return (
    <div className="contenedorPadre">
      <div className="contenedorItem">
        <h2> {nombre}</h2>
        <h3> ${precio}</h3>
        <h3>id: {id}</h3>
        <img className="detailImg" src={img} alt={nombre} />
        {agregarCantidad > 0 ? (
          <Link className="Terminar-Compra" to={"/cart"}>
            {" "}
            Terminar compra
          </Link>
        ) : (
          <ItemCount className="Count"
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
        <Link className="Seguir-Comprando" to={"/"}>
          seguir comprando
        </Link>
      </div>
    </div>
  );
};

export default DetailItem;
