const productos = [
  {nombre: "Buzo The North Face", precio: 17500, id: "1", img: "../img/Buzo.jpg", idCat: "2" },
  {nombre: "Chaleco Denali", precio: 15000, id: "2",img: "../img/chaleco.jpg", idCat: "2",},
  {nombre: "Himalaya", precio: 120000, id: "3", img: "../img/HIMALAYA.jpg",idCat: "2",},
  {nombre: "Campera Puffer", precio: 95000, id: "4", img: "../img/CamperaPuffer.jpg",idCat: "2",},
  {nombre: "Gorro Snow", precio: 9000, id: "5", img: "../img/Gorro.jpg", idCat: "3" },
  {nombre: "Gorra The North Face ", precio: 9000, id: "6", img: "../img/gorra.jpg",idCat: "3",}, 
  {nombre: "Medias COLOR", precio: 4500, id: "7", img: "../img/Medias.jpg",idCat: "3",},
  {nombre: "Gorra Bear", precio: 11200, id: "8", img: "../img/GorraBear.jpg",idCat: "3",},
  {nombre: "Osito", precio: 100000000, id: "9", img: "../img/Osito.jpg",idCat: "3",},
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 100);
  });
};

export const getUnproducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
