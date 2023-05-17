const productos = [
    {nombre: "Buzo", precio: 500, id: 1, img: "./img/Buzo.jpg"},
    {nombre: "Campera", precio: 500, id: 2, img: "./img/Campera.jpg"},
    {nombre: "Gorro", precio: 500, id: 3, img: "./img/gorro.jpg"},
    {nombre: "Accesorio", precio: 500, id: 4, img: "./img/Accesorio.jpg"},
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout( ()=> {
            resolve(productos)
        }, 2000)
    })
}