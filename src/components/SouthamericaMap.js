import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps'

import southamerica from '../assets/maps/sudamerica.json'

function SouthamericaMap() {

  const style = { margin: '1rem auto', width: '400px' };

  return (
    <div className="sudamerica-map" style={style}>
      <VectorMap {...southamerica} />
    </div>
  )
}

export default SouthamericaMap
