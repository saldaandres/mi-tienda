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
}

export function traducirTexto(texto) {
    const encodedParams = new URLSearchParams();
    encodedParams.append("from", "en");
    encodedParams.append("to", "es-co");
    encodedParams.append("text", texto);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '88bdb8caecmsh448d0ab30ef1311p11408ejsn7d53d16f1b9b',
            'X-RapidAPI-Host': 'translo.p.rapidapi.com'
        },
        body: encodedParams
    };

    fetch('https://translo.p.rapidapi.com/api/v3/translate', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
