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
const obtenerdata = (datadatos) => {
  let anios = Object.keys(datadatos);
  let valores = Object.values(datadatos);
  let datajunta = [];
  for (let i = 0; i < anios.length; i++) {
    if (valores[i] === '') {
      datajunta.push({
        anio: anios[i],
        porcentaje: 0,
      });
    } else {
      datajunta.push({
        anio: anios[i],
        porcentaje: valores[i],
      });
    };
  };
  return datajunta;
};
const filtroaños = (desde, hasta, datatotal) => {
  let rangofiltrado = [];
  const key = Object.keys(datatotal);
  const value = Object.values(datatotal);
  for (let i = 0; i < key.length; i++) {
    if (key[i] >= desde && key[i] <= hasta) {
      rangofiltrado.push({
        anio: key[i],
        porcentaje: value[i],
      });
    };
  };
  return rangofiltrado;
};
window.worldbank = {
  obtenerObjetoData: obtenerObjetoData,
  formarArrayDePaises: formarArrayDePaises,
  obtenerIndicadoresPorPais: obtenerIndicadoresPorPais,
  obtenerdata: obtenerdata,
  filtroaños: filtroaños
};