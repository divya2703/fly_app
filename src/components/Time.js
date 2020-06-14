import React from 'react'
import { Link} from 'react-router-dom'
import './button.css'

class Time extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <div className="container">
            <div  className="jumbotron">
              <h1>The current time is : </h1>
              <p className="App-clock">
                The time is {this.state.time}.
              </p>
            </div>
           
           <div className = "div1">
            <Link to="/home" className="btn btn-dark" id = "btn2">Page 1</Link>
            <Link to="./Data" className="btn btn-dark" id = "btn3">Page 3</Link>
            </div>
            
        </div>
        
      );
    }
  }

export default Time