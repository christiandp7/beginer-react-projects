import React, { Component } from 'react'

import BoliviaMap from './BoliviaMap'
import WorldMap from './WorldMap'
import SouthamericaMap from './SouthamericaMap'


export class Map extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-center">Bolivia</h2>
            <BoliviaMap />
          </div>
          <div className="col-md-6">
            <h2 className="text-center">Sudamérica</h2>
            <SouthamericaMap />
          </div>
          <div className="col-md-12">
            <h2 className="text-center">World</h2>
            <WorldMap />
          </div>
        </div>
      </div>
    )
  }
}

export default Map

