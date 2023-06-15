import { useState, useEffect } from "react";
//import { getUnproducto } from "../../asynmock";
import DetailItem from "../DetailItem/DetailItem";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Services/Config";

const DetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "Productos", idItem);

    getDoc(nuevoDoc).then((res) => {
      const data = res.data();
      const nuevoProducto = { id: res.id, ...data };
      setProducto(nuevoProducto);
    });
  }, [idItem]);

  // useEffect(() => {
  //   getUnproducto(idItem).then((res) => setProducto(res));
  // }, [idItem]);
  return (
    <div>
      <DetailItem {...producto} />
    </div>
  );
};

export default DetailContainer;
