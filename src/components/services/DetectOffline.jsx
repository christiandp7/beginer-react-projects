import React, { useState } from 'react'
import { Detector, Offline, Online } from 'react-detect-offline'

function detectOffline() {

  return (
    <>
      <Online><h5 className='online-text'>Estas en linea</h5></Online>
      <Offline><h5 className='offline-text'>No estas en linea</h5></Offline>
      
      <br />
      {/*<Detector
        render={({ online }) => (
          <Resp online={online} />
        )}
        />*/}
    </>
  )
}


function Resp ({ online }) {
  console.log(online)
  return (
    <div className={online ? "normal" : "warning"}>
      You are currently {online ? "online" : "offline"}
    </div>
  )
}

export default detectOffline
