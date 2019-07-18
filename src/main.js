const inputcorreo = document.getElementById('inputcorreo');
const inputcontraseña = document.getElementById('inputcontraseña');
const ingresa = document.getElementById('ingresa');
const error = document.getElementById('error');
const segundapantalla = document.getElementById('segundapantalla');
const login = document.getElementById('login');
const selectElementIndicador = document.getElementById('selectElementIndicador');
const selectElementPais = document.getElementById('selectElementPais');
const selectElementPaisIndicator = document.getElementById('selectElementPaisIndicator');
const tabladedatos = document.getElementById('tabladedatos');
const selectOrderYears = document.getElementById('selectOrderYears');
const inputdesde = document.getElementById('inputdesde');
const inputhasta = document.getElementById('inputhasta');
const rango = document.getElementById('rango');

ingresa.addEventListener('click', () => {
  if (inputcorreo.value === 'LABORATORIA' && inputcontraseña.value === 'LABORATORIA') {
    segundapantalla.classList.toggle('show');
    login.classList.toggle('hide');
  } else {
    error.innerHTML = 'contraseña incorrecta';
  }
});

// Voy a utilizar las propiedad del objeto worldbank para utilizarlo como array de paises
const arrPaises = worldbank.formarArrayDePaises(WORLDBANK);

const pintaOpcionesEnElementoSelect = (arr, elemento, msg) => {
  let string = `<option>Seleccionar un ${msg}</option>`;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      string += `<option value=${arr[i].indicatorName}>${arr[i].indicatorName}</option>`
    } else { 
      string += `<option value=${arr[i]}>${arr[i]}</option>`
    }
  }
  elemento.innerHTML = string; 
};

// Pintamos los paises de manera dinámica con la data
pintaOpcionesEnElementoSelect(arrPaises, selectElementPais, 'pais');

// Evento para seleccionar un pais desde la pantalla
selectElementPais.addEventListener('change', (event) => {
  const paisSeleccionado = event.target.value;
  const arrIndicadores = worldbank.obtenerIndicadoresPorPais(WORLDBANK, paisSeleccionado);
  console.log(arrIndicadores);
  pintaOpcionesEnElementoSelect(arrIndicadores, selectElementIndicador, 'indicador');
});


/*let indicadores = '<option>Seleccionar un indicador</option>';
const arrayindicadores = WORLDBANK[paisSeleccionado].indicators;
for (let i = 0; i < arrayindicadores.length; i++) { // recorriendo array de objetos 
  indicadores += `<option id=${i} value=${i}>${arrayindicadores[i].indicatorName}</option>`;
}
selectElementIndicador.innerHTML = indicadores;
*/
//   //Funcionabilidad a los indicadores, pintamos la tabla//

//   selectElementIndicador.addEventListener('change', (event) => {
//     const indicadorSeleccionado = event.target.value;
//     console.log(event.target.value);
//     const objetoDelIndicador = WORLDBANK[paisSeleccionado].indicators[indicadorSeleccionado].data;
//     //Convirtiendo objeto año a array para recorrerlo
//     const arrayAños = Object.keys(objetoDelIndicador);
//     const tablainner = (arrayAños, objetoDelIndicador) => {
//       let tabla = `<tr>
//     <th>AÑO</th>
//     <th>DATO</th></tr> `;
//       for (let j = 0; j < arrayAños.length; j++) {
//         if (objetoDelIndicador[arrayAños[j]] !== '') {
//           tabla += `
//         <tr>
//     <td>${arrayAños[j]}</td>
//     <td>${objetoDelIndicador[arrayAños[j]].toFixed(2)}</td>
//   </tr>`;
//           tabladedatos.innerHTML = tabla;
//         }
//       }
//     }
//     tablainner(arrayAños, objetoDelIndicador)
//     rango.addEventListener('click', () => {
//       const añoselected = worldbank.filtroaños(inputdesde.value, inputhasta.value, arrayAños)
//       tabladedatos.innerHTML = tablainner(añoselected, objetoDelIndicador)
//     }
//     )
//     selectOrderYears.addEventListener('change', (event) => {
//       let ordenSeleccionado = event.target.value;
//       let resultadoOrdenar;
//       if (ordenSeleccionado === 'ascencente') {
//         //resultadoOrdenar = WORLDBANK.orderYears();
//       } else {
//         resultadoOrdenar = worldbank.orderYears(objetoDelIndicador).reverse();
//       }
//       mostrarDatos.innerHTML = selectOrderYears(resultadoOrdenar);
//     });
//   })
// })


