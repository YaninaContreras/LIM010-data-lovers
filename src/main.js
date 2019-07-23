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

// Pintamos los paises de manera dinámica con la data
pintaOpcionesEnElementoSelect(arrPaises, selectElementPais, 'pais');
let arrIndicadores = [];

// Evento para seleccionar un pais desde la pantalla

selectElementPais.addEventListener('change', (event) => {
  const paisSeleccionado = event.target.value;
  const arrIndicadores = worldbank.obtenerIndicadoresPorPais(WORLDBANK, paisSeleccionado);
  pintaOpcionesEnElementoSelect(arrIndicadores, selectElementIndicador, 'indicador');

  //CREANDO LA FUNCIÓN DE LA TABLA 
  const creandoTabla = (datajunta) => {
    let template = '';
    console.log(datajunta);
    for (let j = 0; j < datajunta.length; j++) {
      template += `
        <tr>
      <td>${datajunta[j].anio}</td>
      <td>${datajunta[j].porcentaje}</td>
      </tr>`;
    };
    tabladedatos.innerHTML = template;
  };
  //EVENTO PARA MOSTRAR TABLA POR INDICADOR
  
  selectElementIndicador.addEventListener('change', (event) => {
    const indicadorSeleccionado = event.target.value;
    const objectData = worldbank.obtenerObjetoData(WORLDBANK, paisSeleccionado, indicadorSeleccionado);
    console.log(worldbank.obtenerObjetoData(WORLDBANK, paisSeleccionado, indicadorSeleccionado));
    const arraydeObjetos = worldbank.obtenerdata(objectData);
    creandoTabla(arraydeObjetos);
    selectOrderYears.addEventListener('change', (event) => {
      const ordenSelected = event.target.value;
      console.log(ordenSelected);
      if (ordenSelected == 0) {
        const arrayOrdenado = arraydeObjetos.sort((unAnio, otroAnio) => unAnio.porcentaje - otroAnio.porcentaje);
        creandoTabla(arrayOrdenado);
      };
      if else(ordenSelected==1){
        const arrayOrdenado = arraydeObjetos.sort((unAnio, otroAnio) => unAnio.porcentaje - otroAnio.porcentaje);
        creandoTabla(arrayOrdenado);
      }
    });
    rango.addEventListener('click', () => {
      const arrayDeObjetosRango = worldbank.filtroaños(inputdesde.value, inputhasta.value, objectData);
      creandoTabla(arrayDeObjetosRango);
    });
  });
});

