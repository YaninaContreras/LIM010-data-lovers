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
console.log(arrPaises);

const pintaOpcionesEnElementoSelect = (arr, elemento, msg) => {
  let string = `<option>Seleccionar un ${msg}</option>`;
  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === 'object') {
      string += `<option id=${i} value=${i}>${arr[i].indicatorName}</option>`
    } else {
      string += `<option value=${arr[i]}>${arr[i]}</option>`
    }

  }
    elemento.innerHTML = string;
};

// Pintamos los paises de manera dinámica
pintaOpcionesEnElementoSelect(arrPaises, selectElementPais, 'pais');
let arrayIndicadores = [];

// Evento para seleccionar un pais desde la pantalla

selectElementPais.addEventListener('change', (event) => {
  const paisSeleccionado = event.target.value;
  const arrIndicadores = worldbank.obtenerIndicadoresPorPais(WORLDBANK, paisSeleccionado);

// Pintamos los indicadores de manera dinámica
  pintaOpcionesEnElementoSelect(arrIndicadores, selectElementIndicador, 'indicador');

// Obtener data en la tabla
  const obtenerdata = (datadatos) => {
    let template = '';
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
    console.log(datajunta);

    for (let j = 0; j < datajunta.length; j++) {
      template += `
        <tr class="tabla">
      <td class="celda">${datajunta[j].anio}</td>
      <td class="celda">${datajunta[j].porcentaje}</td>
      </tr>`;
    };
    tabladedatos.innerHTML = template;
  };

  selectElementIndicador.addEventListener('change', (event) => {
    const indicadorSeleccionado = event.target.value;
    
    const objectData = worldbank.obtenerObjetoData(WORLDBANK, paisSeleccionado, indicadorSeleccionado);
    console.log(worldbank.obtenerObjetoData(WORLDBANK, paisSeleccionado, indicadorSeleccionado));
    obtenerdata(objectData);

//Orden ascendente y descendente 
  /*selectOrderYears.addEventListener('change', (event)=> {
    const ordenadito = ();
   
  });*/


// Filtrado por años 

    rango.addEventListener('click', () => {
      const filtroaños = (desde, hasta, datatotal) => {
        let template2 = '';
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
        console.log(rangofiltrado);
        for (let j = 0; j < rangofiltrado.length; j++) {
          template2 += `
            <tr>
          <td>${rangofiltrado[j].anio}</td>
          <td>${rangofiltrado[j].porcentaje}</td>
          </tr>`;
        };
        tabladedatos.innerHTML = template2;
      };;
      filtroaños(inputdesde.value, inputhasta.value, objectData);
    });
  });
});

