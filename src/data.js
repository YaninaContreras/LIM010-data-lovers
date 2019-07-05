/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const copiardata = (Dataparametro) => {
  const datawb = []
  for (let i = 0; i < Dataparametro.length; i++) {
    datawb.push(Object.assign({}, Dataparametro[i]))
  }
  return datawb
}
const tenerdata=(arraypais,indice)=>{
  const Data=arraypais[indice];
  return Data['1'].indicators;
}
const demográfico = (element)=>{
  let codedemográfico=element.indicatorCode;
  let initdemografico =codedemográfico.slice(0, 6)
  return initdemografico === "UNT.POP.per_allsp.SP.EQ"
}
const laboral=(element)=>{
  let laboralcode=element.indicatorCode;
  let initlaboral=laboralcode.slice(0, 6)
  return initlaboral=== "1524.TLF.NE"
}
const demográficofilter=(data)=>{
  let filter =data.Filter(demográfico)
  return filter;
}
const laboralfilter=(data)=>{
  let filter = data.Filter(laboral)
  return filter
}
window.worldbank {
  demográfico
  laboral
}