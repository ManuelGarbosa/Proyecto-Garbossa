//Programacion sincronica y asincronica

//L a programacion sincronica ejecuta una tarea a la vez, en un orden secuencial

//La programacion asincronica ejecuta varias tareas al mismo tiempo, en orden no secuencial

//Para practicar podemos usar SetTimeout. Recuerden que esta funcion recibe dos parametros: una funcion y un timpo en milisegundos

//Me permite simular el retraso de una peticion a un servidor

//Promesas: UN objeto que representa un evento a futuro.
// En general representa el resultasdo eventual de una peticion asincronica.

// las promesas tienen 3 estados: pendiente, cumplida o rechazada.

const Promesas = () => {
  //Programacion sincronica
  console.log("tarea 1");
  console.log("tarea 2");

  //Programacion asincronica
  setTimeout(() => {
    console.log("Tarea A");
  }, 2000);

  setTimeout(() => {
    console.log("Tarea B");
  }, 1000);

  //Promesas
  const tusFalsasPromesas = (estado) => {
    return new Promise((resolve, reject) => {
      if (estado) {
        resolve("Promesa cumplida");
      } else {
        reject("Promesa rechazada");
      }
    })
  }

  console.log(tusFalsasPromesas(true));

  //THEN Y CATCH: 
  //Podemos cincatenar dos metodos que me permitan ejecutar una funcion cuando la promesa se cumpla o se rechaza.
  //THEN se ejecuta cuando la promesa se cumple
  //CATCH se ejecuta cuando la promesa se rechaza
  //FINALLY se ejecuta siempre
  
  tusFalsasPromesas(false)
  .then((res)=> {
    console.log(res);
  })
 .catch((error)=> {
    console.error(error);
 })

 //Ahora practicamos con un array de datos:

 const array = ["oso", "tibu", "caballo", "langosta"];

   const solicitarAnimales = (estado) => {
    return new Promise ((resuelto, rechazado) => {
        if(estado) {
            resuelto(array);
        } else {
            rechazado("la selva esta vacia");
        }
    })
   }   

   solicitarAnimales(false)
   .then(respuesta => {
    console.table(respuesta);
   })
   .catch(error => console.log(error))
   .finally(()=> console.log("Proceso finalizado"))

  return (
  <div>Promesas</div>
  )
};

export default Promesas;
