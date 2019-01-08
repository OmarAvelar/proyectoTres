import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Demo from './containers/Demo';
import App from './containers/App';
import DemoDos from './containers/DemoDos';
import DemoAlt from './containers/DemoAlt';

export default class PruebaDos extends Component {
  render() {
    return (
      <div>
        <img src="https://www.mirancho.com/wp-content/themes/mirancho/library/images/logo-footer.png" alt=""/>
        <DemoDos />
        {/* <DemoAlt /> */}
       
        <div className="buttons">
    <Link to="/profileAlt" className="button is-light">
        <strong>Back-Ranch</strong>
    </Link>
    </div>

      </div>
    );
  }
}
