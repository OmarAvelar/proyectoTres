import React, { Component } from 'react'
import Demo from './containers/Demo';
import App from './containers/App';
import {Link} from 'react-router-dom'

import DemoAlt from './containers/DemoAlt';

export default class PruebaAlt extends Component {
  render() {
    return (
      <div>
        <img src="https://www.mirancho.com/wp-content/themes/mirancho/library/images/logo-footer.png" alt=""/>
        <DemoAlt />

        <div className="buttons">
    <Link to="/profile" className="button is-light">
        <strong>Front-Ranch</strong>
    </Link>
    </div>

      </div>
      
    );
  }
}
