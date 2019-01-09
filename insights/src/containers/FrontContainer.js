import React, { Component } from 'react';

import Dashboard from '../components/Dashboard';
import Crossfilter from '../components/crossfilter';
import ventas from '../data/ventas'

export default class FrontContainer extends Component {
  render() {
    const attributes = [
      {
        type     : 'linear',
        name     : 'Ventas por Mes',
        dimension: row => +row.mes
      },
      {
        type     : 'ordinal',
        name     : 'Cuartil',
        dimension: row => +row.quarter // heh
      },
      {
        type     : 'ordinal',
        name     : 'Producto',
        dimension: row => row.producto
      },
      {
        type     : 'ordinal',
        name     : 'Hombre o Mujer',
        dimension: row => row.sex
      },
      {
        type     : 'ordinal',
        name     : 'Oportunidades de Venta',
        dimension: row => row.name // heh
      },
      {
        type     : 'ordinal',
        name     : 'Vendió?',
        dimension: row => row.vendio
      },
      {
        type     : 'ordinal',
        name     : 'Ventas totales',
        dimension: row => +row.total
      }
    ];

    return (
      <div>
        <Crossfilter data={ventas} attributes={attributes}>
          <Dashboard />
        </Crossfilter>
      </div>
    );
  }
}