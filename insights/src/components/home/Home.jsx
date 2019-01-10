import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import bulma from 'bulma'
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
       
        function onChange(a, b, c) {
            console.log(a, b, c);
          }

        const {data} = this.state
    return (
      <div >

       <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor:"black"}}>
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
           
            <div style={{width:"100%", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>


        <div className="field"  style={{backgroundColor:"black", width:"60%", padding:"60px", minWidth:"500px",justifyContent:"center", alignItems:"center"}}>
        <div >
        <Carousel autoplay>
        <div><h3><img className="d-block w-100" src="https://bloximages.newyork1.vip.townnews.com/gazette.com/content/tncms/assets/v3/editorial/7/d7/7d726c5e-ecf5-11e8-a6bb-73a2eaa0687c/5bf45826ede21.image.jpg" alt="First slide"/></h3></div>
        <div><h3><img className="d-block w-100" src="https://bloximages.newyork1.vip.townnews.com/gazette.com/content/tncms/assets/v3/editorial/7/d7/7d726c5e-ecf5-11e8-a6bb-73a2eaa0687c/5bf45826ede21.image.jpg" alt="First slide"/></h3></div>
        <div><h3><img className="d-block w-100" src="https://bloximages.newyork1.vip.townnews.com/gazette.com/content/tncms/assets/v3/editorial/7/d7/7d726c5e-ecf5-11e8-a6bb-73a2eaa0687c/5bf45826ede21.image.jpg" alt="First slide"/></h3></div>
        <div><h3><img className="d-block w-100" src="https://bloximages.newyork1.vip.townnews.com/gazette.com/content/tncms/assets/v3/editorial/7/d7/7d726c5e-ecf5-11e8-a6bb-73a2eaa0687c/5bf45826ede21.image.jpg" alt="First slide"/></h3></div>
         </Carousel>
         </div>
         </div>



      

      <div style={{justifyContent:"space-around", display: "flex", flexDirection: "row", width:"40%", minWidth:"200px",alignItems:"center"}}>

            <img src="/banner.png" style={{minWidth:"20%"}}/>

            <img src="/bannerDos.png" alt="" style={{minWidth:"20%"}}/>
        </div>
        


        </div>


        </div>

      
    )
  }
}
