import React from 'react'
import Glidejs, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'



function Glide() {

  //new Glidejs('.glide').mount({ Controls, Breakpoints })

  return (
    <>
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">0</li>
          <li class="glide__slide">1</li>
          <li class="glide__slide">2</li>
        </ul>
      </div>
    </div>
    <div data-glide-el="controls">
      <button data-glide-dir="<<">Start</button>
      <button data-glide-dir=">>">End</button>
    </div>
    </>
  )
}

export default Glide
