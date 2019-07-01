const email = document.getElementById("user")
const psw = document.getElementById("psw")
const button = document.getElementById("next")
const fail =document.getElementById ("fail")
const firstsreen = document.getElementById("login")
const secondsreen =document.getElementById("statements")
button.addEventListener("click", () => {
  if (email.value === "LABORATORIA" && psw.value === "LABORATORIA") {
    secondsreen.classList.toggle("show")  
    firstsreen.classList.toggle("hide")
  }
  else {
    fail.innerHTML="contraseña incorrecta"
  }
})
