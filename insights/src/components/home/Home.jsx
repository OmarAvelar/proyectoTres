import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd';


export default class Home extends Component {
    
    state = {
        data: {}
    }
    //https://cdn3.vectorstock.com/i/1000x1000/47/52/graph-icons-with-reflect-on-white-background-vector-5964752.jpg
    //https://learningdatasciencetoday.files.wordpress.com/2014/08/cropped-4113-data-culture-sketch-infographic.jpg

    //bw https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/NGTYhyRhgilq4uu1a/seamless-animation-of-business-marketing-and-financial-statistic-black-and-white-handwriting-doodle-information-such-as-graph-chart-and-diagram-moving-as-background-presentation-title-in-4k-ultra-hd-loop_hqf_39k1x_thumbnail-full12.png
    //bw nav https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/284576/580/545/m1/fpnw/wm0/1409.m00.i004.n008.p.c24.204370654-hand-drawn-business-charts-for-finance-statistics-and-doodle-infographics-.jpg?1419927953&s=6fab0f3080bd866ddf2b8b6f6353bf11
    render() {
       
        

    return (
      <div style={{backgroundColor:"#444"}}>

       <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor:"#333"}}>
            <div className="navbar-brand" >
                <Link to="/" className="navbar-item" >
                <img src="/logo.png" alt="Logo"/>
                </Link>

                <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbarBasicExample" className="navbar-menu" >
                <div className="navbar-start">
                <Link to="/" className="navbar-item">
                   <h1 style={{color:"white", fontSize:"25px"}}> Insights Tracker </h1>
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
           
            <div style={{width:"100%", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>


        <div className="field"  style={{width:"60%", padding:"60px", minWidth:"500px",justifyContent:"center", alignItems:"center", backgroundColor:"#333"}}>
        <div >
        <Carousel autoplay>
        <div><h3><img className="d-block w-100" src="/registrate.png" alt="First slide"/></h3></div>
        <div><h3><img className="d-block w-100" src="/explora.png" alt="First slide"/></h3></div>
        <div><h3><img className="d-block w-100" src="/descubre.png" alt="First slide"/></h3></div>
         </Carousel>
         </div>
         </div>



      

      <div style={{justifyContent:"space-around", display: "flex", flexDirection: "row", width:"40%", minWidth:"200px",alignItems:"center",padding:"40px"}}>

            <img src="/banner.png" alt="" style={{minWidth:"20%"}}/>

            <img src="/bannerDos.png" alt="" style={{minWidth:"20%"}}/>
        </div>
        


        </div>


        </div>

      
    )
  }
}
