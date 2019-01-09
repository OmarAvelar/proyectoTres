import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getProfile} from '../../services/auth'
import Prueba from '../../Prueba';
import Front from '../../Front';
import UserNo from '../../UserNo';

 class ProfilePage extends Component {

    state={
        user:{}
    }

    componentWillMount(){
      getProfile()
            .then(user=>{
                this.setState({user})
            }).catch(error=>{
                console.log(error)
            })
    }

    

  render() {
    const {user} = this.state
    //conditions
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (user.name === "Omar") {
          return <Prueba />;
        }
        if (user.name === "Joe") {
        return <Front />;
      } else {
        return <UserNo />;
      } 
    }


    const loggedUser = localStorage.getItem('loggedUser')
    if(!loggedUser) this.props.history.push('/login')

    if (user.name === "Omar") {
        
    
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
                   <Link to="/login" className="button is-light">
                       <strong>Logout</strong>
                   </Link>
                  
                   </div>
               </div>
               </div>
        
           

       </div>
       </nav>
     <div className="card">
       <div className="card-content">
           <div className="media">

           <div className="media-content">
               <p className="title is-4">Name: {user.name} </p>
               <p className="title is-4">Email: {user.email} </p>
               <Greeting />
           </div>
           </div>
       </div>
       </div>
   </div>

    )
    
      } if (user.name === "Joe") {
        
    
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
                       <Link to="/login" className="button is-light">
                           <strong>Logout</strong>
                       </Link>
                      
                       </div>
                   </div>
                   </div>
            
               
    
           </div>
           </nav>
         <div className="card">
           <div className="card-content">
               <div className="media">
    
               <div className="media-content">
                   <p className="title is-4">Usuario: {user.name} </p>
                   <p className="title is-4">Email: {user.email} </p>
                   <p className="title is-4">Empresa: Rancho Peludo </p>

                   <Greeting />
               </div>
               </div>
           </div>
           </div>
       </div>
   
        )
        
          } else {
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
    
            
              
    
           </div>
           </nav>
         <div className="card">
           <div className="card-content">
               <div className="media">
    
               <div className="media-content">
                   <p className="title is-4">{user.name} </p>
                   <p className="title is-4">{user.email} </p>
                   <Greeting />
               </div>
               </div>
           </div>
           </div>
       </div>
    
        )
        
         

      }
      
  }
}
export default ProfilePage