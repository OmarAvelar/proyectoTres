import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import BackContainer from './containers/BackContainer';

export default class Back extends Component {
  render() {
    return (
      <div>
        <div style={{justifyContent:"space-around", display: "flex", flexDirection: "row", width:"40%", minWidth:"200px",alignItems:"center", margin:"100px"}}>
        <img src="https://www.mirancho.com/wp-content/themes/mirancho/library/images/logo-footer.png" alt=""/>
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
