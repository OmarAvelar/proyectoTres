import React, { Component } from 'react';
import crossfilter from 'crossfilter';

class Crossfilter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  //crossfilter y dc generan datasets alternativos que son los que se plotean

  componentWillMount() {
    const { data, attributes} = this.props;
    const cfData         = crossfilter(data);
    const dimensions     = {};
    const groups         = {};
    const dimensionTypes = {};

    attributes.map(attribute => {
      dimensions[attribute.name]     = cfData.dimension(attribute.dimension);
      groups[attribute.name]         = dimensions[attribute.name].group(attribute.group || ((data) => data));
      dimensionTypes[attribute.name] = attribute.type;
    });

    const cf = {
      crossfilter   : cfData,
      dataset       : cfData.groupAll(),
      dimensionTypes: dimensionTypes,
      dimensions    : dimensions,
      groups        : groups,
      onFilter      : this.handleFilter.bind(this)
    };

    this.setState({
      cf: cf
    })
  }

  handleFilter(data) {
    if (data.clear || data.values.length === 0) {
      data.dimension.filterAll()
    } else if (data.ordinal) {
      data.dimension.filterFunction((d) => {
        return data.values.indexOf(d) >= 0;
      });
    } else {
      data.dimension.filter(data.values);
    }

    this.setState({ts: Date.now()});
  }

  //renderiza el hijo que en este caso es el subset del dataset principal,
  // que despues se mapea para graficar
  render() {
    const {children} = this.props;

    return (
      <div>
        {
          React.Children.map(children, child => {
            return React.cloneElement(child, {
              cf: this.state.cf
            })
          })
        }
      </div>
    )
  }
}

export default Crossfilter;