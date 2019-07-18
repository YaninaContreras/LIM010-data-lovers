const inputcorreo = document.getElementById('inputcorreo')
const inputcontraseña = document.getElementById('inputcontraseña')
const ingresa = document.getElementById('ingresa')
const error = document.getElementById('error')
const segundapantalla = document.getElementById('segundapantalla')
const login = document.getElementById('login')
const desdeaños = document.getElementById('desdeaños')
const hastaaños = document.getElementById('hastaaños')
const selectElementIndicador = document.getElementById('selectElementIndicador');
const selectElementPais = document.getElementById('selectElementPais');
const selectElementPaisIndicator = document.getElementById('selectElementPaisIndicator');
const tabladedatos = document.getElementById('tabladedatos');
const ordenaranios = document.getElementById('ordenaranios')

ingresa.addEventListener('click', () => {
  if (inputcorreo.value === 'LABORATORIA' && inputcontraseña.value === 'LABORATORIA') {
    segundapantalla.classList.toggle('show')
    login.classList.toggle('hide')
  } else {
    error.innerHTML = 'contraseña incorrecta'
  }
})

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
        tabladedatos.innerHTML = template;
      }
    }
    const filtroaños = (arrayAños) => {
      let añouno = `<option>Desde</option>`
      let añodos = `<option>Hasta</option>`
      for (let h = 0; h < arrayAños.length; h++) {
        añouno += `<option value=${arrayAños[h]}>${arrayAños[h]}</option>`
        desdeaños.innerHTML = añouno
        añodos += `<option value=${arrayAños[h]}>${arrayAños[h]}</option>`
        hastaaños.innerHTML = añodos
      }
    }
    filtroaños(arrayAños);
  })
})

