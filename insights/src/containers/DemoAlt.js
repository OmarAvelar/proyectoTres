import React, { Component } from 'react';

import DashboardAlt from '../components/DashboardAlt';
import Crossfilter from '../components/crossfilter';
import datitosAlt from '../data/datitosAlt'

export default class DemoAlt extends Component {
  render() {
    const attributes = [
      {
        type     : 'ordinal',
        name     : 'Tipos de animales por Año',
        dimension: row => row.ano
      },
      {
        type     : 'ordinal',
        name     : 'Animales',
        dimension: row => row.animal // heh
      },
      {
        type     : 'ordinal',
        name     : 'Gasto',
        dimension: row => +row.gasto // heh
      },
      {
        type     : 'ordinal',
        name     : 'Produccion',
        dimension: row => +row.produccion // heh
      }
    ];

    return (
      <div>
        <Crossfilter data={datitosAlt} attributes={attributes}>
          <DashboardAlt />
        </Crossfilter>
      </div>
    );
  }
}