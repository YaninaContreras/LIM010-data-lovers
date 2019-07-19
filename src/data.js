//función para formar array de paises
const formarArrayDePaises = (obj) => {
  const arrPaises = Object.keys(obj);
  return arrPaises;
};

const obtenerIndicadoresPorPais = (obj, string) => {
  const arrIndicadores = obj[string].indicators;
  return arrIndicadores;
};

const obtenerDataPorIndicador = (obj, string, indicator) => {
  console.log(obj,string,indicator);
  const arrayData = obj[string].indicators[indicator];
  return arrayData;
}
/*
const datadatos = (obj,pais,indicador) =>{
const dataDelIndicador = obj[pais].indicators[[indicador][0].data];
return dataDelIndicador;
}
const obtenerDataPorIndicador = (dataDelIndicador) =>{
  let years = [];
  let valores = [];
 lett datadatos=datadelindicador.data
for (let propiedad in datadatos) {
  years.push(propiedad);
  if(datadatos[propiedad] === ''){
     valores.push(0)
  } else {
     valores.push(datadatos[propiedad]) 
  }; 


};
};*/
/*
console.log(arrAnios1.reverse());
console.log(valores1.reverse());

const filtroaños = (inputdesde, inputhasta, años) => {
  const key = Object.keys(años)
  const value = Object.values(años)
  let rangoanios = [ ]
  for (let j = 0; j < key.length; j++) {
    if (key[j] >= inputdesde.value && key[j] <= inputhasta.value) {
      rangoanios.push([key[j], value[j]])
    }
  }
  return rangoanios
};
*/
//Asignando variables globales//

window.worldbank = {
  formarArrayDePaises: formarArrayDePaises,
  obtenerIndicadoresPorPais: obtenerIndicadoresPorPais,
  obtenerDataPorIndicador: obtenerDataPorIndicador
  //obtenerDataPorIndicador: obtenerDataPorIndicador
  }
