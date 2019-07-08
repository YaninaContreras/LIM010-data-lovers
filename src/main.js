
const inputcorreo = document.getElementById('inputcorreo')
const inputcontraseña = document.getElementById('inputcontraseña')
const ingresa = document.getElementById('ingresa')
const error = document.getElementById('error')
const segundapantalla = document.getElementById('segundapantalla')
const login = document.getElementById('login')
ingresa.addEventListener('click', () => {
  if (inputcorreo.value === 'LABORATORIA' && inputcontraseña.value === 'LABORATORIA') {
    segundapantalla.classList.toggle('show')
    login.classList.toggle('hide')
  } else {
    error.innerHTML = 'contraseña incorrecta'
  }
}
)
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const  datarray= Object.entries(WORLDBANK);
const data = array(datarray);
const peruindicadores = tenerdata(data, 0);
const mexicoindicadores = tenerdata(data, 1);
const chileindicadores = tenerdata(data, 2);
const brasilindicadores = tenerdata(data, 3);

const filterdemogperu = demografilter(peruindicadores);
const filterdemogmexico = demografilter(mexicoindicadores);
const filterdemogchile = demografilter(chileindicadores);
const filterdemogbrasil = demografilter(brasilindicadores);

// Obteniendo indicadores de educación
const filterlabperu = labofilter(peruindicadores);
const filterlabmexico= labofilter(mexicoindicadores);
const filterlabchile = labofilter(chileindicadores);
const filterlabbrasil = labofilter(brasilindicadores);
let arrayIndicators= new Array();
for(let i=0; i<=26;i++) {
arrayIndicators[i]=[i].forEach (filterdemogperu).indicatorName;
}
arrayIndicators.sort();
document.getElementById('peru-tabla').innerHTML=arrayIndicators


let selectedContainer;
let selectedData

function crearTablaIndicador(indicadores, contenedor) {
  contenedor.innerHTML = ''; 

  let tbl = document.createElement('table');
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

 
  contenedor.appendChild(tbl);

  selectedContainer = contenedor; 
  selectedData = indicadores; 
}

const createTableCell=(value, parent)=> {
  let newCell = parent.insertCell();

  let text = document.createTextNode(value);
  newCell.appendChild(text);
}
const showDetalle = (contenedor, indicador) => {
  contenedor.innerHTML = '';

  let tbl = document.createElement('table');

  let hrow = tbl.insertRow();
  createTableCell('Año', hrow);
  createTableCell('Cantidad', hrow);

  for (let i in indicador.data) {
    let row = tbl.insertRow();
    createTableCell(i, row);
    createTableCell(indicador.data[i], row);
  }

  contenedor.appendChild(tbl);
};