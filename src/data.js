//Funcion para convertir array a paises
const formarArrayDePaises = (obj) => {
  const arrcountries = Object.keys(obj);
  return arrcountries;
};

//Funcion para obtener indicadores por pais
const obtenerIndicadoresPorPais = (obj, string) => {
  const arrIndicators = obj[string].indicators;
  return arrIndicators;
};

//Funcion para obtener la data por indicador
const obtenerObjetoData = (WORLDBANK, strings, indicador) => {
  const objetoData = WORLDBANK[strings].indicators[indicador].data;
  return objetoData;
};

//Funcion para ordenar ascendente y descendente 
const ordenarData = (dataob) => {
  const indicadorConArray = Object.entries(dataob);
  return indicadorConArray.sort((antes, despues) => {
    return antes[1] - despues[1];
  });
    
  
};

window.worldbank = {
  obtenerObjetoData: obtenerObjetoData,
  formarArrayDePaises: formarArrayDePaises,
  obtenerIndicadoresPorPais: obtenerIndicadoresPorPais,
}