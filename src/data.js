const formarArrayDePaises = (obj) => {
  const arrPaises = Object.keys(obj);
  return arrPaises;
};

const obtenerIndicadoresPorPais = (obj, string) => {
  const arrIndicadores = obj[string].indicators;
  return arrIndicadores;
};// 
const obtenerObjetoData = (WORLDBANK, strings, indicador) => {
  const objetoData = WORLDBANK[strings].indicators[indicador].data;
  return objetoData;
};



window.worldbank = {
  obtenerObjetoData: obtenerObjetoData,
  formarArrayDePaises: formarArrayDePaises,
  obtenerIndicadoresPorPais: obtenerIndicadoresPorPais,
}