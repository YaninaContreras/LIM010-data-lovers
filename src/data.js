// Funcion para convertir array a paises
const formarArrayDePaises = (obj) => {
  const arrcountries = Object.keys(obj);
  return arrcountries;
};

// Funcion para obtener indicadores por pais
const obtenerIndicadoresPorPais = (obj, string) => {
  const arrIndicators = obj[string].indicators;
  return arrIndicators;
};

// Funcion para obtener la data por indicador
const obtenerObjetoData = (WORLDBANK, strings, indicador) => {
  const objetoData = WORLDBANK[strings].indicators[indicador].data;
  return objetoData;
};
// FUNCIÓN PARA CREAR UN ARRAY DE OBJETOS
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
// FUNCIÓN PARA CREAR UN ARRAY DE OBJETOS FILTRADOS
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

// Funcion para ordenar ascendente y descendente 

const ordenarData = (dataob) => {
  const indicadorConArray = Object.entries(dataob);
  return indicadorConArray.sort((antes, despues) => {
    return antes[1] - despues[1];
  });
};
const funcionOrdenAnios = (ordenSelected, arraydeObjetos) => {
  if (ordenSelected == 0) {
    const arrayOrdenadoAsc = arraydeObjetos.sort((unAnio, otroAnio) => unAnio.porcentaje - otroAnio.porcentaje);
    return arrayOrdenadoAsc;
  } else {
    const arrayOrdenadoDsc = arraydeObjetos.sort((unAnio, otroAnio) => otroAnio.porcentaje - unAnio.porcentaje);
    return arrayOrdenadoDsc;
  }
};
const funcionPromedio = (arraydeObjetos) => {
  let sumaObjeto = arraydeObjetos.reduce((acumulador, siguienteValor) => {
    return acumulador + siguienteValor.porcentaje;
  }, 0);
  return sumaObjeto / arraydeObjetos.length;
};

window.worldbank = {
  obtenerObjetoData: obtenerObjetoData,
  formarArrayDePaises: formarArrayDePaises,
  obtenerIndicadoresPorPais: obtenerIndicadoresPorPais,
  obtenerdata: obtenerdata,
  filtroaños: filtroaños,
  ordenarData: ordenarData,
  funcionOrdenAnios: funcionOrdenAnios,
  funcionPromedio: funcionPromedio
};  