import React from "react";
import { useState, useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { db } from "../../Services/Config";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import "./Chekout.css";

const Chekout = () => {
  const { carrito, VaciarCarrito, total } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");



  const manejadorFormulario = (event) => {
    event.preventDefault();
    if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
        setError("Por favor complete todos los campos")
        return;
    }

   if(email != emailConfirmacion) {
    setError("Los campos del email no coinciden")
    return;
   }

   const orden = {
    items: carrito.map(producto => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad
    })),
    total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
    nombre,
    apellido,
    telefono,
    email,
    fecha: new Date(),
   };


    Promise.all(
        orden.items.map(async(productoOrden) => {
            const productoRef = doc(db,"Productos", productoOrden.id);
            const productoDoc = await getDoc(productoRef);
            const stockActual = productoDoc.data().stock;
             await updateDoc(productoRef, {
                stock: stockActual - productoOrden.cantidad,
             }); 

        })
    )

    .then (() => {
        addDoc(collection(db, "Ordenes"), orden)
        .then((docRef) => {
            setOrdenId(docRef.id);
            VaciarCarrito();
        })
        .catch((error) => {
            console.error("Error al crear la orden", error);
            setError("se produjo un error al crear la orden");
        })
    })
  }


  return (
    <div>
      <h2>Chekout</h2>
      <form onSubmit={manejadorFormulario} className="form">
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>

            <p>Precio $:{producto.item.precio} </p>
            <hr />
          </div>
        ))}
        <p>Total compra: {total}</p>
        <hr />
        <div className="form-group" > 
            <label htmlFor="">Nombre</label>
            <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        </div>

        <div className="form-group">
            <label htmlFor="">Apellido</label>
            <input type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
        </div>

        <div className="form-group">
            <label htmlFor="">Telefono</label>
            <input type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
        </div>

        <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
            <label htmlFor="">Confirmacion Email</label>
            <input type="email" value={emailConfirmacion} onChange={(e)=> setEmailConfirmacion(e.target.value)} />
        </div>

        {error && <p style={{color:"red"}}> {error} </p>}
        <button type="submit"> Finalizar Compra </button>
      </form>

      {

        ordenId && (
            <strong>Gracias  por tu compra!{ordenId}</strong>
        )
      }
    </div>
  );
};

export default Chekout;
