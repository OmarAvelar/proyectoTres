import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    
    state = {
        data: {}
    }
    

    render() {
        const {data} = this.state
    return (
      <div>
       <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item" >
                <img src="/logo.png" alt="Logo"/>
                </Link>

                <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <Link to="/" className="navbar-item">
                    Insights Tracker
                </Link>
               

                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <Link to="/signup" className="button is-light">
                        <strong>Sign up</strong>
                    </Link>
                    <Link to="/login" className="button is-light">
                        Log in
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </nav>
           
      </div>
    )
  }
}
