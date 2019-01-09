const data = [
  {
    "vendio" : "si",
    "name"     : "Allen",
    "mes"      : "2.0000",
    "quarter"     : "1",
    "sex"      : "mujer",
    "total"    : "30000",
    "producto"    : "Queso"
  },
  {
    "vendio" : "si",
    "name"     : "Rene",
    "mes"      : "3.0000",
    "quarter"     : "1",
    "sex"      : "hombre",
    "total"    : "25000",
    "producto"    : "Vino"
  },
  {
    "vendio" : "no",
    "name"     : "Leo",
    "mes"      : "11.000",
    "quarter"     : "3",
    "sex"      : "hombre",
    "total"    : "10000",
    "producto"    : "Huevo"
  },
  {
    "vendio" : "si",
    "name"     : "Allen",
    "mes"      : "1.0000",
    "quarter"     : "1",
    "sex"      : "mujer",
    "total"    : "10000",
    "producto"    : "Queso"
  },
  {
    "vendio" : "si",
    "name"     : "Simon",
    "mes"      : "4.0000",
    "quarter"     : "1",
    "sex"      : "hombre",
    "total"    : "25000",
    "producto"    : "Queso"
  },
  {
    "vendio" : "si",
    "name"     : "Leo",
    "mes"      : "5.000",
    "quarter"     : "2",
    "sex"      : "hombre",
    "total"    : "25000",
    "producto"    : "Queso"
  },
  {
    "vendio" : "si",
    "name"     : "Allen",
    "mes"      : "6.0000",
    "quarter"     : "2",
    "sex"      : "mujer",
    "total"    : "35000",
    "producto"    : "Queso"
  },
  {
    "vendio" : "si",
    "name"     : "Juana",
    "mes"      : "7.0000",
    "quarter"     : "2",
    "sex"      : "mujer",
    "total"    : "5000",
    "producto"    : "Queso"
  },
  {
    "vendio" : "si",
    "name"     : "Leo",
    "mes"      : "8.000",
    "quarter"     : "2",
    "sex"      : "hombre",
    "total"    : "15000",
    "producto"    : "Queso"
  },
  {
    "vendio" : "si",
    "name"     : "Allen",
    "mes"      : "9.0000",
    "quarter"     : "3",
    "sex"      : "mujer",
    "total"    : "25000",
    "producto"    : "Vino"
  },
  {
    "vendio" : "si",
    "name"     : "Rene",
    "mes"      : "1.0000",
    "quarter"     : "1",
    "sex"      : "hombre",
    "total"    : "20000",
    "producto"    : "Queso"
  },
  {
    "vendio" : "si",
    "name"     : "Leo",
    "mes"      : "2.000",
    "quarter"     : "1",
    "sex"      : "hombre",
    "total"    : "5000",
    "producto"    : "Queso"
  },
  {
    "vendio" : "si",
    "name"     : "Leo",
    "mes"      : "4",
    "quarter"     : "1",
    "sex"      : "hombre",
    "total"    : "5000",
    "producto"    : "Queso"
  },
  {
    "vendio" : "si",
    "name"     : "Marcelino",
    "mes"      : "10.000",
    "quarter"     : "3",
    "sex"      : "hombre",
    "total"    : "30000",
    "producto"    : "Vino"
  },
  {
    "vendio" : "si",
    "name"     : "Marcelino",
    "mes"      : "6.0000",
    "quarter"     : "2",
    "sex"      : "hombre",
    "total"    : "15000",
    "producto"    : "Vino"
  },
  {
    "vendio" : "si",
    "name"     : "Javi",
    "mes"      : "12.000",
    "quarter"     : "3",
    "sex"      : "hombre",
    "total"    : "45000",
    "producto"    : "Vino"
  },
  {
    "vendio" : "no",
    "name"     : "Javi",
    "mes"      : "4",
    "quarter"     : "1",
    "sex"      : "hombre",
    "total"    : "15000",
    "producto"    : "Jamon"
  },
  {
    "vendio" : "no",
    "name"     : "Allen",
    "mes"      : "4",
    "quarter"     : "1",
    "sex"      : "mujer",
    "total"    : "10000",
    "producto"    : "Jamon"
  },
  {
    "vendio" : "no",
    "name"     : "Allen",
    "mes"      : "4",
    "quarter"     : "1",
    "sex"      : "mujer",
    "total"    : "20000",
    "producto"    : "Huevo"
  },
  {
    "vendio" : "no",
    "name"     : "Marcelino",
    "mes"      : "4",
    "quarter"     : "1",
    "sex"      : "hombre",
    "total"    : "10000",
    "producto"    : "Pan"
  }
]

const ventas = data.map(record => {
  return {
    ...record,
    mes : (record.mes === 'NA' ? null : +record.mes),
    quarter: (record.quarter === '' ? null : record.quarter)
  };
});

export default ventas;