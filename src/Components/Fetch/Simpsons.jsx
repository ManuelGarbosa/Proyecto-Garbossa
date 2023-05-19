import { useState, useEffect } from "react";

const Simpsons = () => {
  const [personaje, setpersonaje] = useState([]);
  useEffect(() => {
    // fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
    //   .then((respuesta) => respuesta.json())
    //   .then((data) => setpersonaje(data))
    //   .catch((error) => console.error(error));

    const pedirPersonajes = async () => {
      try {
        const respuesta = await fetch(
          "https://thesimpsonsquoteapi.glitch.me/quotes?count=5"
        );
        const data = await respuesta.json();
        setpersonaje(data);
      } catch (error) {
        console.error(error);
      }
    };
    pedirPersonajes();
  }, []);
  return (
    <div>
      <h2>Los Simpsons</h2>
      {personaje.map((personaje, index) => {
        return (
          <div key={index}>
            <p> Nombre: {personaje.character} </p>
            <img src={personaje.image} alt={personaje.character} />
          </div>
        );
      })}
    </div>
  );
};

export default Simpsons;
