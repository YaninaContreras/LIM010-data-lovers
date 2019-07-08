
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
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const perucontenedor = document.getElementById('perutabla')
const peruboton = document.getElementById('Peru')

const datarray = Object.values(WORLDBANK)
const data = copiardata(datarray)
const mexicoindicadores = tenerdata(data, 1)
const chileindicadores = tenerdata(data, 2)
const brasilindicadores = tenerdata(data, 3)

// const filterdemogperu = demográficofilter(peruindicadores)
// const filterdemogmexico = demográficofilter(mexicoindicadores)
// const filterdemogchile = demográficofilter(chileindicadores)
// const filterdemogbrasil = demográficofilter(brasilindicadores)

// const filterlabperu = laboralfilter(peruindicadores)
// const filterlabmexico = laboralfilter(mexicoindicadores)
// const filterlabchile = laboralfilter(chileindicadores)
// const filterlabbrasil = laboralfilter(brasilindicadores)

peruboton.addEventListener('click', () => {
  perucontenedor.innerHTML = toString(peruindicadores)
})
