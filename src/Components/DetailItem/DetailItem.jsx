import "./DetailItem.css";

const DetailItem = ({ id, nombre, precio, img }) => {
  return (
    <div className="contenedorPadre">
      <div className="contenedorItem">
        <h2> {nombre}</h2>
        <h3> ${precio}</h3>
        <h3>{id}</h3>
        <img className="detailImg" src={img} alt={nombre} />
      </div>
    </div>
  );
};

export default DetailItem;
