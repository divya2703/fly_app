import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import './button.css'

class Currency extends Component{
    render(){
        return (
          <div className="container">
            <div className="jumbotron">
              <h1> Welcome to the Currency Converter Page!</h1>
              <h2> Still in build !</h2>
            </div>
            <div className = "btn1"><Link to="/home" className="btn btn-dark">Page 1</Link> </div>
            
            
          </div>
          
        ); 
        }
}


// export default Currency
export default Currency