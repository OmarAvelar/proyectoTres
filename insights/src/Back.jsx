import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import BackContainer from './containers/BackContainer';

export default class Back extends Component {
  render() {
    return (
      <div>
        <div>
        <img src="rancho.png" alt=""/>
        </div >
        <BackContainer />

        <div className="buttons">
    <Link to="/profile" className="button is-light">
        <strong>Front-Ranch</strong>
    </Link>
    </div>

      </div>
      
    );
  }
}
