
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const selectElementIndicador = document.getElementById('tipodeindicador')
const selectElementPais = document.getElementById('listadepaises')
const selectElementPaisIndicator = document.getElementById('resultado')


//seleccionando indicadores por pais//
const paises = Object.keys(WORLDBANK)
const indicadoresPorPais = (string) => {
  let paises1 = `<option>Seleccionar un país</option>`
  for (let i = 0; i < string.length; i++) {
    paises1 += `<option value=${string[i]}>${string[i]}</option>`
  }
  selectElementPais.innerHTML = paises1
}

const arrayIndicadoresPorPais = indicadoresPorPais(paises, WORLDBANK)
let indicadores = `<option>Seleccionar un país</option>`
selectElementPais.addEventListener('change', (event) => {
  const arrayindicadores = WORLDBANK[event.target.value].indicators
  for (let i = 0; i < arrayindicadores.length; i++) {
    indicadores += `<option id=${i} value=${arrayindicadores[i].indicatorName}>${arrayindicadores[i].indicatorName}</option>`
  }
  selectElementIndicador.innerHTML = indicadores
})


//seleccionando indicadores por codigo //

const seleccionarIndicadorPorCodigo = (string, array) => {
  //console.log(string)
  for (let i = 0; i < array.length; i++) {
    return(array[i].indicatorName)
  };
  return selectorindicadores
};


//creando variables globales//
window.worldbank = {
  indicadoresPorPais: indicadoresPorPais,
  arrayIndicadoresPorPais: arrayIndicadoresPorPais,
  paises: paises,
  seleccionarIndicadorPorCodigo: seleccionarIndicadorPorCodigo
}

