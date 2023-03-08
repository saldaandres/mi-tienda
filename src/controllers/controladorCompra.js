// llamo a la memoria para acceder a los datos
let infoProducto = JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)

let foto = document.getElementById("imagenInfo")
foto.src = infoProducto.foto
let titulo = document.getElementById("nombre")
titulo.textContent = infoProducto.nombre
let precio = document.getElementById("precio")
precio.textContent = infoProducto.precio
let descripcion = document.getElementById("descripcion")
descripcion.textContent = infoProducto.descripcion



