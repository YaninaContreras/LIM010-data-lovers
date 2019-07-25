global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
const input = {
  'PERU': {
    'indicators': [
      {
        'data': {
          '1960': '',
          '1961': '',
          '1962': '',
          '1963': '',
          '1964': '',
          '1965': '',
          '1966': '',
          '1967': '',
          '1968': '',
          '1969': '',
          '1970': '',
          '1971': '',
          '1972': '',
          '1973': '',
          '1974': '',
          '1975': '',
          '1976': '',
          '1977': '',
          '1978': '',
          '1979': '',
          '1980': '',
          '1981': '',
          '1982': '',
          '1983': '',
          '1984': '',
          '1985': '',
          '1986': '',
          '1987': '',
          '1988': '',
          '1989': '',
          '1990': '',
          '1991': '',
          '1992': '',
          '1993': '',
          '1994': '',
          '1995': '',
          '1996': '',
          '1997': '',
          '1998': '',
          '1999': '',
          '2000': '',
          '2001': '',
          '2002': 31.4799995422363,
          '2003': 29.6299991607666,
          '2004': 27.6299991607666,
          '2005': 27.2099990844727,
          '2006': 26.9699993133545,
          '2007': 27.6700000762939,
          '2008': 26.9599990844727,
          '2009': 27.3600006103516,
          '2010': 25.3400001525879,
          '2011': 24.7999992370605,
          '2012': 25.0400009155273,
          '2013': 24.0900001525879,
          '2014': 24.2099990844727,
          '2015': 21.6800003051758,
          '2016': 23.7399997711182,
          '2017': 23.7600002288818
        },
        'countryName': 'Perú',
        'countryCode': 'PER',
        'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
        'indicatorCode': 'SL.TLF.PART.FE.ZS'
      },
    ]
  },
  

};
const output = ['PER', 'MEX', 'BRA', 'CHL'];
describe('formarArrayDePaises', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.formarArrayDePaises).toBe('function');
  });
  it('debería ser una función', () => {
    expect(typeof worldbank.formarArrayDePaises(input)).toBe('object');
  });
  it('debería ser una función', () => {
    expect(worldbank.formarArrayDePaises(input)).toEqual(output);
  });
});
