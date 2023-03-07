export function ampliarInfo(productos) {
    let nombre = document.getElementById("nombre")
    let precio = document.getElementById("precio")
    let descripcion = document.getElementById("descripcion")
    let imagenInfo = document.getElementById("imagenInfo")

    // obtener datos de la URL
    let datosGET = new URLSearchParams(location.search)
    let posicion = +datosGET.get("posicion")
    let producto = productos[posicion]

    nombre.textContent = producto.nombre
    precio.textContent = producto.precio
    descripcion.textContent = producto.descripcion
    imagenInfo.setAttribute("src", producto.fotos[0])
}