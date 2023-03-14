// llamo a la memoria para acceder a los datos
import {ejecutarApiTasas, traducirTexto} from "../helpers/ampliarInfo.js";
import {formateador} from "../helpers/pintarProductos.js";

// pintando el producto
let infoProducto = JSON.parse(localStorage.getItem("producto"))
let foto = document.getElementById("imagenInfo")
foto.src = infoProducto.foto
let titulo = document.getElementById("nombre")
titulo.textContent = infoProducto.nombre
let precio = document.getElementById("precio")
precio.innerHTML = formateador.format(infoProducto.precio)
let descripcion = document.getElementById("descripcion")
descripcion.textContent = infoProducto.descripcion


// convertiendo las monedas
let botonConvertir = document.getElementById("conversor")
//botonConvertir.addEventListener("click", async () => await traducirTexto())
botonConvertir.addEventListener("click", async () => await ejecutarApiTasas())

// evitando problemas con el input de cantidad
let cantidad = document.getElementById("cantidad")
cantidad.addEventListener("keydown", (tecla) => {
    let teclasProhibidas = ["e", "-", "+", "*", "/"]
    if (teclasProhibidas.includes(tecla.key)) {
        tecla.preventDefault()
    }
})




