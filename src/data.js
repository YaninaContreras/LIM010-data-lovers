/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const data = (wbdata) => {
  const vacio=[]
  for(let i=0;i<iwbdata;i++){
    vacio.push({
      Country:data[i].countryName,

    })
  }
  return vacio;
};

window.worldbank.WORLDBANK={
  wbdata}
