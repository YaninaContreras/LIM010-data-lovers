
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
});

/*SEGUNDA PANTALLA*/

const selectElement = document.getElementById('tipodeindicador');

selectElement.addEventListener('change', (event) => {
  const resultado = event.target.value;
  for(let i=0; i<WORLDBANK.length; i++ ){
    if(WORLDBANK[i].PER ===resultado){
      console.log(WORLDBANK[i]);
    }
  }
});

//let selectorindicadores = '<option disabled selected>----Seleccione un indicador----</option>'
//selectorindicadores += `<option value= '${array[i].indicatorName.split('-')[0]}-${i}'>${array[i].indicatorName}</option>`


//const objeto={nombre:"cecilio"};
// plantilla= `hola que tal estas ${objeto.nombre}`;
//console.log(plantilla);

//*const paises= ['PER', 'MEX','BRA','CHL'];
//for (let i=0; i <paises.length ; i++){
//console.log(WORLDBANK[paises[i]].indicators[0].indicatorName)
//}; 



 