import {productos} from "../helpers/baseDatos.js";

let nombre = document.getElementById("nombre")
let precio = document.getElementById("precio")
let descripcion = document.getElementById("descripcion")
let imagen = document.getElementById("imagen")

// obteniendo datos de la URL
let datosGET = new URLSearchParams(location.search)
let posicion = +datosGET.get("posicion")
let producto = productos[posicion]

nombre.textContent = producto.nombre
precio.textContent = producto.precio
descripcion.textContent = producto.descripcion
imagen.setAttribute("src", producto.fotos[0])

