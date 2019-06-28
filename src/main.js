/* Manejo del DOM */

/* llamando IDs*/

const inputcorreo = document.getElementById("inputcorreo")
const inputcontraseña = document.getElementById("inputcontraseña")
const ingresa = document.getElementById("ingresa")
const error = document.getElementById("error")
const segundapantalla = document.getElementById("segundapantalla")
ingresa.addEventListener("click", () => {
    if (inputcorreo.value === "LABORATORIA" && inputcontraseña.value === "LABORATORIA") {
        segundapantalla.classList.toggle("show")
        login.classList.toggle("hide")
    }
    else {
        error.innerHTML = "contraseña incorrecta"
    }
})