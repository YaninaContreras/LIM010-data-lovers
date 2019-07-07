/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const copiardata = (Dataparametro) => {
  const datawb = [ ]
  for (let i = 0; i < 1399; i++) {
    datawb.push(Object.assign({}, Dataparametro[i]))
  }
  return datawb
}
const tenerdata = (arraypais, index) => {
  const data = arraypais[index]
  return data
}
const demográfico = (element) => {
  let codedemográfico = element.indicatorCode
  let initdemografico = codedemográfico.slice(0, 6)
  return initdemografico === 'UNT.POP.SP'
}
const laboral = (element) => {
  let laboralcode = element.indicatorCode
  let initlaboral = laboralcode.slice(0, 6)
  return initlaboral === 'TLF.NE'
}
// const demográficofilter = (data) => {
//   let filter = data.filter(demográfico)
//   return filter
// }
// const laboralfilter = (data) => {
//   let filter = data.filter(laboral)
//   return filter
// }
window.worldbank = {
  demográfico,
  laboral,
  // demográficofilter,
  // laboralfilter
}
