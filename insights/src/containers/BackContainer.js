import React, { Component } from 'react';

import DashboardAlt from '../components/DashboardAlt';
import Crossfilter from '../components/crossfilter';
import animales from '../data/animales'

export default class BackContainer extends Component {
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
        name     : 'Producción',
        dimension: row => +row.produccion // heh
      }
    ];

    return (
      <div>
        <Crossfilter data={animales} attributes={attributes}>
          <DashboardAlt />
        </Crossfilter>
      </div>
    );
  }
}