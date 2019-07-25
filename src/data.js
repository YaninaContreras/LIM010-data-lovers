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
const filtroaños = (desde, hasta, datadedatos2) => {
  let rangofiltrado = [];
  const key = Object.keys(datadedatos2);
  const value = Object.values(datadedatos2);
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

const funcionOrdenAnios = (ordenSelected, arraydeObjetos) => {
  if (ordenSelected === '0') {
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
  let prom = sumaObjeto / arraydeObjetos.length;
  return prom;
};

window.worldbank = {
  obtenerObjetoData: obtenerObjetoData,
  formarArrayDePaises: formarArrayDePaises,
  obtenerIndicadoresPorPais: obtenerIndicadoresPorPais,
  obtenerdata: obtenerdata,
  filtroaños: filtroaños,
  funcionOrdenAnios: funcionOrdenAnios,
  funcionPromedio: funcionPromedio
};  