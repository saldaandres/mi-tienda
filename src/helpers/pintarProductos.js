export function pintarProductos(productos) {
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

        // crear un titulo
        let titulo = document.createElement("h4")
        titulo.classList.add("text-center", "fw-800")
        titulo.textContent = producto.nombre

        let descripcion = document.createElement("p")
        descripcion.textContent = producto.descripcion
        descripcion.classList.add("d-none")

        // crear un precio
        let precio = document.createElement("h5")
        precio.classList.add("text-center", "text-success", "fw-bold")
        precio.textContent = producto.precio

        // detectando evento
        tarjeta.addEventListener("mouseover", () => {
            imagen.src = producto.fotos[1];
        })

        tarjeta.addEventListener("mouseout", () => {
            imagen.src = producto.fotos[0]
        })

       // tarjeta.addEventListener("click", () => {
       //     location.href = "./src/views/ampliarInfo.html?posicion="+ index;
       // } )

        // padres e hijos
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(precio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })


}