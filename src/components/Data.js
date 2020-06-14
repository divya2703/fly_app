import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './button.css'




class Data extends Component {
    state = {
      names: []
    }
   
    componentDidMount(){
      axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole ')
        .then(res => {
          console.log(res);
          this.setState({
            names: res.data
          });
        })
    }
    render(){
      const { names: names } = this.state
      const nameList = names.length ? (
        names.map(name => {
          return (
            <div className="name card" key={name.id}>
                <div className="card-content">
                    <p id = "name">{name.first+" "+name.last}</p>
                </div>
            </div>
          )
        })
      ) : (
        <div className="center">
         <div className="div2"> <h1> Loading</h1></div>
           
        </div>
      );
  
      return (
        <div>
          <div className="container data">
          <div className = "div1">
          <div className="jumbotron"> <h1>Welcome to Datapage!</h1></div>
            <Link to="/Time" className="btn btn-dark" id = "btn2">Page 2</Link>
            <Link to="./Currency" className="btn btn-dark" id = "btn3">Page 4</Link>
            </div>
            
            {nameList}
          </div>
        </div>
      )
    }
  }
  
  export default Data