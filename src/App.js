import React from 'react'
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom'

import Weather from './components/Weather'
import Canvas from './components/Canvas'
import User from './components/User'

import './App.css'

function App() {
  return (
    <Router>

      <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/">
                Weather
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/canvas">
                Canvas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/user">
                Random User
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container text-center">
        <Switch>
          <Route exact path="/">
            <Weather />
          </Route>
          <Route exact path="/canvas"> 
            <Canvas />
          </Route>
          <Route exact path="/user"> 
            <User />
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
