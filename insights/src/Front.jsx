import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import FrontContainer from './containers/FrontContainer';

export default class Front extends Component {
  render() {
    return (
      <div >
        <img src="rancho.png" alt=""/>
        <FrontContainer />
       
        <div className="buttons">
    <Link to="/profileAlt" className="button is-light">
        <strong>Back-Ranch</strong>
    </Link>
    </div>

      </div>
    );
  }
}
