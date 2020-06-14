import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './components/Home'
import Time from './components/Time'
import Currency from './components/Currency'
import Data from './components/Data'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/time' component={Time} />
            <Route path='/data' component={Data} />
            { <Route path='/currency' component={Currency} />}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
