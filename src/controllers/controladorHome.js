import {productos} from "../helpers/baseDatos.js"
import {pintarProductos} from "../helpers/pintarProductos.js"
// llamando a la fila
let fila = document.getElementById("fila")
// pintar los productos de la tienda
pintarProductos(productos)
// escuchando el click en la fila contenedora de productos
fila.addEventListener("click", function (evento) {
    let tarjeta = evento.target.parentElement
    let datosProducto = {}
    datosProducto.foto = tarjeta.querySelector("img").src
    datosProducto.nombre = tarjeta.querySelector("h4").textContent
    datosProducto.precio = tarjeta.querySelector("h5").textContent
    datosProducto.descripcion = tarjeta.querySelector("p").textContent

    // usaremos la memoria del pc para guardar esta info
    localStorage.setItem("producto", JSON.stringify(datosProducto))
    window.location.href = "./src/views/ampliarInfo.html"
})

let conversor = document.getElementById("")


