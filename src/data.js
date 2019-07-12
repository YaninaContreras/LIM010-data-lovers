
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


const indicadoresPorPais = (string, data) => {
  return data[string].indicators
}

const arrayIndicadoresPorPais = indicadoresPorPais('PER', WORLDBANK)

const seleccionarIndicadorPorCodigo = (string, array) => {
  //console.log(string)
  for (let i = 0; i < array.length; i++) {
    return(array[i].indicatorName)
  };
  return selectorindicadores
}
seleccionarIndicadorPorCodigo('SP.POP', arrayIndicadoresPorPais);

window.worldbank = {

  indicadoresPorPais:indicadoresPorPais,
  seleccionarIndicadorPorCodigo: seleccionarIndicadorPorCodigo,
}
 
