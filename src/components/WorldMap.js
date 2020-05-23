import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps'

import world from '../assets/maps/world.json'

function WorldMap() {

  const style = { margin: '1rem auto' };

  return (
    <div style={style}>
      <VectorMap {...world} />
    </div>
  )
}

export default WorldMap
