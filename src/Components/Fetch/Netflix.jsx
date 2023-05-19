import { useState, useEffect } from "react";
import "./Netflix.css";

const Netflix = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const MI_KEY = "cbd14027";

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${MI_KEY}&S=${busqueda}`)
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [busqueda]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBusqueda(event.target.busqueda.value);
    event.target.busqueda.value = "";
  };

  return (
    <div>
      <h1>Netflix</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="busqueda" />
        <button type="submit">Buscar</button>
      </form>

      <ul>
        {peliculas === undefined ? (
          <h2>La pelicula no esta disponible en nuestra base de datos</h2>
        ) : (
          peliculas.map((peli) => (
            <li key={peli.imdbID}>
              {" "}
              <img src={peli.Poster} /> {peli.Title}{" "}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Netflix;
