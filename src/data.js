
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const selectElementIndicador = document.getElementById('selectElementIndicador');
const selectElementPais = document.getElementById('selectElementPais');
const selectElementPaisIndicator = document.getElementById('selectElementPaisIndicator');
const tabladedatos = document.getElementById('tabladedatos');
const ordenaranios = document.getElementById('ordenaranios')


//Pintamos los paises//

//Convirtiendo Objetos paises a array //
const paises = Object.keys(WORLDBANK);
const indicadoresPorPais = (string) => {
  let paises1 = `<option>Seleccionar un país</option>`; 
  for (let i = 0; i < string.length; i++) {
    paises1 += `<option value=${string[i]}>${string[i]}</option>`;
  }
  selectElementPais.innerHTML = paises1; //para que se muestre el texto de encabezado 
};
const arrayIndicadoresPorPais = indicadoresPorPais(paises); // reemplazamos el parametro 14 y usamos el array paises de la linea 11 para tener la lista de paises//


//funcionabilidad a los paises, pintamos los indicadores//

selectElementPais.addEventListener('change', (event) => {
  const paisSeleccionado = event.target.value;
  let indicadores = `<option>Seleccionar un indicador</option>`;
  const arrayindicadores = WORLDBANK[paisSeleccionado].indicators;// [{},{},{}]
  for (let i = 0; i < arrayindicadores.length; i++) { // recorriendo array de objetos 
    indicadores += `<option id=${i} value=${i}>${arrayindicadores[i].indicatorName}</option>`
  }
  selectElementIndicador.innerHTML = indicadores;

 //Funcionabilidad a los indicadores, pintamos la tabla//

  selectElementIndicador.addEventListener('change', (event) => {
    const indicadorSeleccionado = event.target.value;
    console.log(event.target.value); 
    let template = `<tr>
    <th>AÑO</th>
    <th>DATO</th></tr> `;
    
    const objetoDelIndicador = WORLDBANK[paisSeleccionado].indicators[indicadorSeleccionado].data;
    console.log(WORLDBANK[paisSeleccionado].indicators);
    console.log(WORLDBANK[paisSeleccionado].indicators[indicadorSeleccionado]);
    console.log(objetoDelIndicador);
    const arrayAños = Object.keys(objetoDelIndicador);
    console.log(arrayAños);
    for (let j = 0; j < arrayAños.length; j++) {
      console.log(arrayAños[j]);// propiedades años 
      console.log(objetoDelIndicador); // {} objeto 
      console.log(objetoDelIndicador[arrayAños[j]]);
      // 6>5 ?a:b
      if (objetoDelIndicador[arrayAños[j]] !== '') {
        template += `
        <tr>
    <td>${arrayAños[j]}</td>
    <td>${objetoDelIndicador[arrayAños[j]].toFixed(2)}</td>
  </tr>`;
        tabladedatos.innerHTML = template;
      }
    }
//Ordenar data ascendente y descendente//

const ordenaranios = (datadeobjetos) => {
const arraydeindicadores = Object.entries(datadeobjetos);
return arraydeindicadores.sort((antes, despues) => { 
return antes[1] - despues[1];
  })};
 });
});

//Asignando variables globales//
window.worldbank = {
  indicadoresPorPais: indicadoresPorPais,
  arrayIndicadoresPorPais: arrayIndicadoresPorPais,
  paises: paises
}