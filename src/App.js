import React from 'react'
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom'

import Weather from './components/Weather'

import './App.css'

function App() {
  return (
    <Router>
      <header className="App-header">
        <div className="container contheader">
          <ul>
          <li><NavLink activeClassName="active" to="/">Weather</NavLink></li>
          </ul>
        </div>
        
        
      </header>
      <div className="container text-center">
        <Switch>
          <Route exact path="/">
            <Weather />
          </Route>
          <Route path="*">
            <h1>404 - Not Found</h1>
          </Route>
        </Switch>
      </div>
      
    </Router>
  )
}

export default App;
