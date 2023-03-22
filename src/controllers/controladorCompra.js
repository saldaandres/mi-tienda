// llamo a la memoria para acceder a los datos
import {ejecutarApiTasas} from "../helpers/ampliarInfo.js";
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
let spanCantidad = document.getElementById("spanCarrito")

// pintar fotos pequeñas
let objetoFotos = JSON.parse(localStorage.getItem("fotos"))
let foto1 = document.getElementById("foto1")
let foto2 = document.getElementById("foto2")
foto1.classList.add("gris")
foto1.src = objetoFotos.fotos[0]
foto2.src = objetoFotos.fotos[1]

// cambiar la foto grande
foto1.addEventListener("click", ()=> {
    foto.src = foto1.src
    foto2.classList.add("gris")
    foto1.classList.remove("gris")
})
foto2.addEventListener("click", ()=> {
    foto1.classList.add("gris")
    foto2.classList.remove("gris")
    foto.src = foto2.src

})



let infoCarrito = JSON.parse(localStorage.getItem("carrito"))
let carrito = []
if (infoCarrito != null) {
    carrito = infoCarrito
    spanCantidad.textContent = carrito.length
}
// carrito de compras
let cantidad = document.getElementById("cantidad")
let botonAgregar = document.getElementById("agregarAlCarrito")
botonAgregar.addEventListener("click", () => {
    carrito.push(infoProducto)
    spanCantidad.textContent = carrito.length
    localStorage.setItem("carrito", JSON.stringify(carrito))
})



// convertiendo las monedas
let botonConvertir = document.getElementById("conversor")
//botonConvertir.addEventListener("click", async () => await traducirTexto())
botonConvertir.addEventListener("click", async () => await ejecutarApiTasas())

// evitando problemas con el input de cantidad
cantidad.addEventListener("keydown", (tecla) => {
    let teclasProhibidas = ["e", "-", "+", "*", "/"]
    if (teclasProhibidas.includes(tecla.key)) {
        tecla.preventDefault()
    }
})

// calculando el subtotal
let spanSubtotal = document.getElementById("subtotal")
cantidad.addEventListener("input", () => {
    spanSubtotal.textContent = formateador.format(cantidad.value * infoProducto.precio)
})

// limpiar carrito
let botonLimpiar = document.getElementById("limpiar-carrito")
botonLimpiar.addEventListener("click", () => {
    carrito = []
    spanCantidad.textContent = carrito.length
    localStorage.setItem("carrito", JSON.stringify(carrito))
})





