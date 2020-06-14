import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
class MyRouter extends React.Component {  render () {
    return (
      <BrowserRouter>
        <Route 
          path='/'
          render={ props => <MyComponent {...props} />}
        />
      </BrowserRouter>
    )
  }}