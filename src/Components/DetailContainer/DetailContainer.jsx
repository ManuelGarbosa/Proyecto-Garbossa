import { useState, useEffect } from "react";
import { getUnproducto } from "../../asynmock";
import DetailItem from "../DetailItem/DetailItem";
import { useParams } from "react-router-dom";

const DetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    getUnproducto(idItem).then((res) => setProducto(res));
  }, [idItem]);
  return (
    <div>
      <DetailItem {...producto} />
    </div>
  );
};

export default DetailContainer;
