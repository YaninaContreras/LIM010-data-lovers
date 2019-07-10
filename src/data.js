/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


const indicadoresPorPais = (string, data) => {
  return data[string].indicators
}

const arrayIndicadoresPorPais = indicadoresPorPais('PER', WORLDBANK)

const seleccionarIndicadorPorCodigo = (string, array) => {
  console.log(string)
  for (let i = 0; i < array.length; i++) {
    let selectorindicadores = '<option disabled selected>----Seleccione un indicador----</option>'
    console.log(array[i].indicatorName)
    selectorindicadores += `<option value= ' ${array[i].indicatorName.split('-')[0]}-${i}'>${array[i].indicatorName}</option>`
  };
  return selectorindicadores
}
seleccionarIndicadorPorCodigo('SP.POP', arrayIndicadoresPorPais);

window.worldbank = {
  indicadoresPorPais:indicadoresPorPais,
  seleccionarIndicadorPorCodigo: seleccionarIndicadorPorCodigo,

}