import React, { Component } from 'react';
// import Radium, {getState, keyframes, Style, StyleRoot} from 'radium';
import {style} from './style.js'

class DashboardAlt extends Component {
  render() {
    const {name, children} = this.props;
    return (
      <div style={style.base}>
        <div style={style.header.base}>
          <span style={style.header.text}>{name}</span>
        </div>
        <div style={style.content.base} ref="content">
          {children}
        </div>
      </div>
    );
  }
}

export default DashboardAlt;