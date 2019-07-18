//Ordenar data ascendente y descendente//

const orderYears = (datadeobjetos) => { // {}
const arraydeindicadores = Object.entries(datadeobjetos);
console.log(arraydeindicadores);
return arraydeindicadores.sort((antes, despues) => {
  return antes[1] - despues[1];
})
};
//Asignando variables globales//
window.worldbank = {
  orderYears: orderYears
}