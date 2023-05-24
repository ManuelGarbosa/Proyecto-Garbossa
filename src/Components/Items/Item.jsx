import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    
      <div className="cardProducto">
        <img className="imgProducto" src={img} alt={nombre} />
        <h3 className="cardTitulo"> {nombre} </h3>
        <p className="precio"> {precio} </p>
        <p> {id} </p>
       <Link className="detalle" to={`item/${id}`}>Ver Detalle</Link>
      </div>
    
  );
};

export default Item;
