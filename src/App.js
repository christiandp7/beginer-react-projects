import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, NavLink as Link, Route } from 'react-router-dom'

import Weather from './components/Weather'
import Canvas from './components/Canvas'
import User from './components/User'
import Map from './components/Map'
import Usestate from './components/UseState'
import Useeffect from './components/UseEffect'
import ReactBootstrapTable from './components/ReactBootstrapTable'
import Glide from './components/Glide'

import DetectOffline from './components/services/DetectOffline'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


import './assets/scss/index.scss'
import './App.css'


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>

      <Navbar color="primary" dark expand="lg">
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" activeClassName="active" exact to="/">
                Weather
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" activeClassName="active" to="/canvas">
                Canvas
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" activeClassName="active" to="/user">
                Random User
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" activeClassName="active" to="/map">
                Map
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" activeClassName="active" to="/usestate">
                UseState
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" activeClassName="active" to="/useeffect">
                UseEffect
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" activeClassName="active" to="/reactbootstraptable">
                Table
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" activeClassName="active" to="/glide">
                Glide
              </Link>
            </NavItem>
          </Nav>
          <DetectOffline />
        </Collapse>
      </Navbar>

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
          <Route exact path="/map"> 
            <Map />
          </Route>
          <Route exact path="/usestate"> 
            <Usestate />
          </Route>
          <Route exact path="/useeffect"> 
            <Useeffect />
          </Route>
          <Route exact path="/reactbootstraptable"> 
            <ReactBootstrapTable />
          </Route>
          <Route exact path="/glide"> 
            <Glide />
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
