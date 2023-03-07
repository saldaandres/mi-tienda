import {productos} from "../helpers/baseDatos.js";
import {ampliarInfo} from "../helpers/ampliarInfo.js";

ampliarInfo(productos)
let cantidad = document.getElementById("cantidad")
cantidad.addEventListener("keydown", (tecla) => {
    let array = ["e", "."]
    if (array.includes(tecla.key)) {
        tecla.preventDefault()
    }
    console.log(cantidad.textContent)
})


