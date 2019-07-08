/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
<<<<<<< HEAD
const array = (dataparametro) => {
  const wbdata = [];
  for (let i = 0; i < dataparametro.length; i++) {
    wbdata.push(Object.assign({}, dataparametro[i]));
  }
  return wbdata;
};
const tenerdata = (paises, index) => {
  const data = paises[index];
  return data['1'].indicators
};

const demografico = (element) => {
  let demogcode = element.indicatorCode;
  let initdemog = demogcode.slice(0, 6);
  return initdemog === 'SP.POP';
};

const laboral = (element) => {
  let labocode = element.indicatorCode;
  let initlab = labocode.slice(0, 6);
  return initlab === 'SE.PRM';
};

const demografilter = (data) => {
  let arrfilter= data.filter (demografico);
  return arrfilter;
};
const labofilter = (data) => {
  let arrfilter = data.filter (laboral);
  return arrfilter;
};
window.worldbank = {
  demografico : demografico,
  laboral : laboral,
  demografilter:demografilter,
  labofilter : labofilter,
};
=======
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
>>>>>>> c295f4b8cbe84c0dc3475d63bd57dc0444bc0f04
