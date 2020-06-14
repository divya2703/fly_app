import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import './button.css'
class Home extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="jumbotron">
          <h1> Welcome to the homepage!</h1>
        </div>
        <div className = "btn1">
            <Link to="./Time" className="btn btn-dark">Page 2</Link>
          </div>
        </div>
      
    ); 
    }
}
export default Home



