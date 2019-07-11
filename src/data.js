/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


const indicadoresPorPais = (string, data) => {
  let arraypaises = ''
  for (let i = 0; i < array.length; i++) {
    arraypaises+= <input type="radio" class=" pais ${paises[i].codigo}" name="paises" value='${paises[i].codigo}'/><label>${paises[i].pais}</label>

  }
  return data[string].indicators
}
const arrayIndicadoresPorPais = indicadoresPorPais(paises, WORLDBANK)

const seleccionarIndicadorPorCodigo = (string, array) => {
  console.log(string)
  let nombredeindicadores = `<option disabled selected>Seleccione un indicador</option>`
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].indicatorName)
    nombredeindicadores += `<option value='${array[i].indicatorName}-${i}'>${array[i]}</option>`
  }
  return nombredeindicadores
}
const arrayIndicadoresPorCodigo = seleccionarIndicadorPorCodigo('SP.POP', arrayIndicadoresPorPais);

const indicadorpais = (array) => {
  let newarray = []
  for (let i = 0; i < array.length; i++) {
    newarray.push(array[i].indicatorName)
  }
  return newarray
}


window.worldbank = {
  indicadoresPorPais: indicadoresPorPais,
  seleccionarIndicadorPorCodigo: seleccionarIndicadorPorCodigo,
  arrayIndicadoresPorCodigo: arrayIndicadoresPorCodigo,
  arrayIndicadoresPorPais: arrayIndicadoresPorPais,
  indicadorpais: indicadorpais
}

