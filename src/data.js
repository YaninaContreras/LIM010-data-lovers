
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const selectElementIndicador = document.getElementById('tipodeindicador')
const selectElementPais = document.getElementById('listadepaises')
const selectElementPaisIndicator = document.getElementById('resultado')
const selectElementData = document.getElementById('listadedatas')
// seleccionando indicadores por pais //
const paises = Object.keys(WORLDBANK);

//Pintamos los paises
const indicadoresPorPais = (string) => {
  let paises1 = `<option>Seleccionar un país</option>`
  for (let i = 0; i < string.length; i++) {
    paises1 += `<option value=${string[i]}>${string[i]}</option>`
  }
  selectElementPais.innerHTML = paises1
}

const arrayIndicadoresPorPais = indicadoresPorPais(paises)


selectElementPais.addEventListener('change', (event) => {
  const paisSeleccionado = event.target.value;
  let indicadores = `<option>Seleccionar un indicador</option>`;
  const arrayindicadores = WORLDBANK[paisSeleccionado].indicators;

  for (let i = 0; i < arrayindicadores.length; i++) {
    indicadores += `<option id=${i} value=${i}>${arrayindicadores[i].indicatorName}</option>`
  }
  selectElementIndicador.innerHTML = indicadores;

  selectElementIndicador.addEventListener('change', (event) => {
    const indicadorSeleccionado = event.target.value;
    const datas = `<option>Seleccionar data</option>`;
    const arraydata = WORLDBANK[paisSeleccionado].indicators[indicadorSeleccionado].data;
    selectElementData.innerHTML = indicadores;
  })

})



// seleccionando indicadores por codigo //
/*
const seleccionarIndicadorPorCodigo = (string, array) => {

  //console.log(string)//

  for (let i = 0; i < array.length; i++) {
    return (array[i].indicatorName)
  };
  return selectorindicadores
}
*/
/* const constenedor = document.getElementById('tables-peru')


//creando variables globales//
selectElementIndicador.addEventListener('change', (event) => {
  const seleccionadordeindicador = (event.target.id)
  console.log(seleccionadordeindicador)
  let template = `
  <tr>
<th>año</th>
<th>dato</th> 
</tr>`
  for (let i = 0; i < 57; i++) {
    if (WORLDBANK[event.target.value][i].indicators === seleccionadordeindicador) {

      template += `<tr id=${i}>
  <td>${paises[i].indicators[i].data}</td>
</tr>`
    }
  }
}
)
 */
// creando variables globales //
window.worldbank = {
  indicadoresPorPais: indicadoresPorPais,
  arrayIndicadoresPorPais: arrayIndicadoresPorPais,
  paises: paises,
 // seleccionarIndicadorPorCodigo: seleccionarIndicadorPorCodigo
}

