
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
const paises = [{pais: 'Brasil', codigo: 'BRA'}, {pais: 'Chile', codigo: 'CHL'}, {pais: 'Mexico', codigo: 'MEX'}, {pais: 'Perú', codigo:'PER'}]
const selectElementIndicador = document.getElementById('tipodeindicador')

selectElementIndicador.addEventListener('change', (event)=>{
const pais = event.target.value
indicadoresPorPais.innerHTML = arrayIndicadoresPorCodigo(arrayIndicadoresPorCodigo(paisdata(pais)));
console.log(pais)

}
)

