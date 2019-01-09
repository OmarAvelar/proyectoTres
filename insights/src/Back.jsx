import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import BackContainer from './containers/BackContainer';

export default class Back extends Component {
  render() {
    return (
      <div>
        <img src="https://www.mirancho.com/wp-content/themes/mirancho/library/images/logo-footer.png" alt=""/>
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
