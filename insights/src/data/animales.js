const data = [
  {
    "animal"   : "Pollo",
    "produccion"     : "5000",
    "gasto"      : "3500",
    "ano"    : "2018"
  },{
    "animal"   : "Vaca",
    "produccion"     : "10000",
    "gasto"      : "7000",
    "ano"    : "2018"
  },{
    "animal"   : "Cerdo",
    "produccion"     : "8000",
    "gasto"      : "4000",
    "ano"    : "2018"
  },{
    "animal"   : "Pollo",
    "produccion"     : "4000",
    "gasto"      : "2000",
    "ano"    : "2017"
  },{
    "animal"   : "Vaca",
    "produccion"     : "10000",
    "gasto"      : "8000",
    "ano"    : "2017"
  },{
    "animal"   : "Cerdo",
    "produccion"     : "6000",
    "gasto"      : "6000",
    "ano"    : "2017"
  },{
    "animal"   : "Pollo",
    "produccion"     : "7000",
    "gasto"      : "1000",
    "ano"    : "2016"
  },{
    "animal"   : "Vaca",
    "produccion"     : "9000",
    "gasto"      : "5000",
    "ano"    : "2016"
  },{
    "animal"   : "Cerdo",
    "produccion"     : "9000",
    "gasto"      : "3500",
    "ano"    : "2016"
  },{
    "animal"   : "Pollo",
    "produccion"     : "7000",
    "gasto"      : "2500",
    "ano"    : "2015"
  },{
    "animal"   : "Cerdo",
    "produccion"     : "9000",
    "gasto"      : "9000",
    "ano"    : "2015"
  },{
    "animal"   : "Pato",
    "produccion"     : "9000",
    "gasto"      : "1000",
    "ano"    : "2018"
  }
]

const animales = data.map(record => {
  return {
    ...record,
    mes : (record.mes === 'NA' ? null : +record.mes),
    quarter: (record.quarter === '' ? null : record.quarter)
  };
});

export default animales;