
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const selectElementIndicador = document.getElementById('tipodeindicador');
const selectElementPais = document.getElementById('listadepaises');
const selectElementPaisIndicator = document.getElementById('resultado');
const tabladedatod = document.getElementById('contenedortabla');
const desdeaños = document.getElementById('desdeaños')
const hastaaños = document.getElementById('hastaaños')

// seleccionando indicadores por pais //
const paises = Object.keys(WORLDBANK);

//Pintamos los paises
const indicadoresPorPais = (string) => {
  let paises1 = `<option>Seleccionar un país</option>`;
  for (let i = 0; i < string.length; i++) {
    paises1 += `<option value=${string[i]}>${string[i]}</option>`;
  }
  selectElementPais.innerHTML = paises1;
};
const arrayIndicadoresPorPais = indicadoresPorPais(paises);


selectElementPais.addEventListener('change', (event) => {
  const paisSeleccionado = event.target.value;
  let indicadores = `<option>Seleccionar un indicador</option>`;
  const arrayindicadores = WORLDBANK[paisSeleccionado].indicators;// [{},{},{}]
  for (let i = 0; i < arrayindicadores.length; i++) { // recorriendo array de objetos 
    indicadores += `<option id=${i} value=${i}>${arrayindicadores[i].indicatorName}</option>`
  }
  selectElementIndicador.innerHTML = indicadores;

  selectElementIndicador.addEventListener('change', (event) => {
    const indicadorSeleccionado = event.target.value;
    console.log(event.target.value); //
    let template = `<tr>
    <th>año</th>
    <th>dato</th></tr> `;

    const objetoDelIndicador = WORLDBANK[paisSeleccionado].indicators[indicadorSeleccionado].data;
    console.log(WORLDBANK[paisSeleccionado].indicators);
    console.log(WORLDBANK[paisSeleccionado].indicators[indicadorSeleccionado]);
    console.log(objetoDelIndicador);
    const arrayAños = Object.keys(objetoDelIndicador);
    const arrayDatos = Object.values(objetoDelIndicador);
    console.log(arrayAños);
    console.log(arrayDatos);
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
        tabladedatod.innerHTML = template;
      }
    }
    const filtroaños = () => {
      let añouno = `<option>Desde</option>`
      for (let h = 0; h < arrayAños.length; h++) {
        añouno += `<option value=${arrayAños[h]}>${arrayAños[h]}</option>`
        desdeaños.innerHTML = añouno
      }
      let añodos = `<option>Hasta</option>`
      for (let h = 0; h < arrayAños.length; h++) {
        añodos += `<option value=${arrayAños[h]}>${arrayAños[h]}</option>`
        hastaaños.innerHTML = añodos
      }
    }
    desdeaños.addEventListener('change', (event) => {
      const añoseleccionado = event.target.value
      let primerosaños = arrayAños.filter(años => años > añoseleccionado)
    }
    )
  })
})

// creando variables globales //
window.worldbank = {
  arrayAños: arrayAños,
  indicadoresPorPais: indicadoresPorPais,
  arrayIndicadoresPorPais: arrayIndicadoresPorPais,
  paises: paises,
  // seleccionarIndicadorPorCodigo: seleccionarIndicadorPorCodigo
}
