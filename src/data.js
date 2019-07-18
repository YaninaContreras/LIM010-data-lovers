const formarArrayDePaises = (obj) => {
  const arrPaises = Object.keys(obj);
  return arrPaises;
};

const obtenerIndicadoresPorPais = (obj, string) => {
  const arrIndicadores = obj[string].indicators;
  return arrIndicadores;
};

//Ordenar data ascendente y descendente//


const orderYears = (datadeobjetos) => { // {}
  const arraydeindicadores = Object.entries(datadeobjetos);
  console.log(arraydeindicadores);
  return arraydeindicadores.sort((antes, despues) => {
    return antes[1] - despues[1];
  })
};

const orderYears = (obj) => { // {}
const arraydeindicadores = Object.entries(datadeobjetos);
console.log(arraydeindicadores);
return arraydeindicadores.sort((antes, despues) => {
  return antes[1] - despues[1];
})
};
const formarArrayDePaises = (obj) => {
  const arrPaises = Object.keys(obj);
  return arrPaises;
};

const obtenerIndicadoresPorPais = (obj, string) => {
  const arrIndicadores = obj[string].indicators;
  return arrIndicadores;
};

//Ordenar data ascendente y descendente//

const orderYears = (datadeobjetos) => { // {}
  const arraydeindicadores = Object.entries(datadeobjetos);
  console.log(arraydeindicadores);
  return arraydeindicadores.sort((antes, despues) => {
    return antes[1] - despues[1];
  })
};

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
}
//Asignando variables globales//

window.worldbank = {
  formarArrayDePaises: formarArrayDePaises,
  obtenerIndicadoresPorPais: obtenerIndicadoresPorPais,
  filtroaños: filtroaños,
  orderYears: orderYears
}
