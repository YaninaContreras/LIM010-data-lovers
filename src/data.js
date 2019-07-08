/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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
