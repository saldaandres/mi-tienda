import {productos} from "../helpers/baseDatos.js"

// llamando a la fila
let fila = document.getElementById("fila")

// recorriendo el arreglo
productos.forEach(function (producto) {
    // creando columnas para alojar los productos
    let columna = document.createElement("div")
    columna.classList.add("col")

    // crear una tarjeta para almacenar la info del producto
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "h-100", "shadow")

    // crear una imagen
    let imagen = document.createElement("img")
    imagen.classList.add("img-fluid", "w-100")
    imagen.src = producto.fotos[0]

    // padres e hijos
    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})

