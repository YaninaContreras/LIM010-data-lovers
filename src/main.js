
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
// eslint-disable-next-line no-undef
const data = copiardata(datarray)
const Peruindicadores = tenerdata(data, 0)
const Mexicoindicadores = tenerdata(data, 1)
const Chileindicadores = tenerdata(data, 2)
const Brasilindicadores = tenerdata(data, 3)

const filterdemogperu= demográficofilter(Peruindicadores)
const filterdemogmexico= demográficofilter(Mexicoindicadores)
const filterdemogchile= demográficofilter(Chileindicadores)
const filterdemogbrasil= demográfico(Brasilindicadores)

const filterlabperu=laboralfilter(Peruindicadores)
const filterlabmexico=laboralfilter(Mexicoindicadores)
const filterlabchile=laboralfilter(Chileindicadores)
const filterlabbrasil=laboralfilter(Brasilindicadores)
