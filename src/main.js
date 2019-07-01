
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
  };
});

const worldbank = WORLDBANK;
const mostrardata = (data) => {
  let mostrar = "";
  for (let i = 0; i < data; i++) {
    let llamado.push = (´
    <div class="first"> 
     <input type="text">${element.data}</input>
    </div>
    mostrar+=llamado
    )
  }
  return mostrar 
} 
