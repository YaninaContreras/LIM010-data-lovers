
const inputcorreo = document.getElementById('inputcorreo')
const inputcontraseña = document.getElementById('inputcontraseña')
const ingresa = document.getElementById('ingresa')
const error = document.getElementById('error')
const segundapantalla = document.getElementById('segundapantalla')
const login = document.getElementById('login')
ingresa.addEventListener('click', () => {
  if (inputcorreo.value === 'LABORATORIA' && inputcontraseña.value === 'LABORATORIA') {
    segundapantalla.classList.toggle('show')
    login.classList.toggle('hide')
  } else {
    error.innerHTML = 'contraseña incorrecta'
  }
}
)
const datarray = Object.entries(WORLDBANK)
const data = array(datarray)
const peruindicadores = tenerdata(data, 0)
const mexicoindicadores = tenerdata(data, 1)
const chileindicadores = tenerdata(data, 2)
const brasilindicadores = tenerdata(data, 3)

const filterdemogperu = demografilter(peruindicadores)
const filterdemogmexico = demografilter(mexicoindicadores)
const filterdemogchile = demografilter(chileindicadores)
const filterdemogbrasil = demografilter(brasilindicadores)

const filterlabperu = labofilter(peruindicadores)
const filterlabmexico = labofilter(mexicoindicadores)
const filterlabchile = labofilter(chileindicadores)
const filterlabbrasil = labofilter(brasilindicadores)

const buttonPopulation = document.getElementById('boton-demografico')
const buttonViolence = document.getElementById('boton-laboral')




