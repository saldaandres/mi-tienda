let infoProducto = JSON.parse(localStorage.getItem("producto"))

export async function ejecutarApiTasas() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '88bdb8caecmsh448d0ab30ef1311p11408ejsn7d53d16f1b9b',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    let response = await fetch('https://alpha-vantage.p.rapidapi.com/query?to_currency=USD&function=CURRENCY_EXCHANGE_RATE&from_currency=COP', options)
    let datos = await response.json()
    let tasa = datos['Realtime Currency Exchange Rate']['5. Exchange Rate']
    convertirMoneda(tasa)
}

function convertirMoneda(tasa) {
    let spanPrecio = document.getElementById("precio")
    let precioUSD = infoProducto.precio * tasa
    spanPrecio.textContent = "$ " + precioUSD.toFixed(2)

    let bandera = document.getElementById("bandera")
    bandera.src = "../../assets/img/estados_unidos.png"

    let cantidad = document.getElementById("cantidad").value
    let spanSubtotal = document.getElementById("subtotal")
    spanSubtotal.textContent = "$ " + (precioUSD * cantidad).toFixed(2)
}

//<editor-fold desc="Funcion para incluir texto traducido. Aun no funciona">
export async function traducirTexto() {
    let descripcion = document.getElementById("descripcion")
    let textoDescripcion = descripcion.textContent


    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '88bdb8caecmsh448d0ab30ef1311p11408ejsn7d53d16f1b9b',
            'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
        },
        body: '{"q":"Hola","source":"es","target":"en"}'
    };

    let response = await fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
    let datos = await response.json()
    console.log(datos)
}
//</editor-fold>