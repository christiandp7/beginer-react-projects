import React, { useState, useEffect } from 'react'
//import Glidejs, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import Glidejs from '@glidejs/glide'



function Glide() {

  useEffect(() => {
    const glide = new Glidejs(".glide", {
      /*peek: 50,*/
      peek: { before: 0, after: 70 },
      perView: 3,
      type: "carousel",
      gap: 20,
      //autoplay: 4000,
      //focusAt: 3,
      direction: 'rtl'
    });
    glide.mount();
    return () => {
      //console.log("glide unmounted")
      glide.destroy();
    }
  })

  

  return (
    <div class="glide multi">
      <div class="glide__arrows" data-glide-el="controls">
        {/*<button class="glide__arrow glide__arrow--left btn btn-primary" data-glide-dir=">">
          Prev
  </button>*/}
      </div>
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">1</li>
          <li class="glide__slide">2</li>
          <li class="glide__slide">3</li>
          <li class="glide__slide">4</li>
          <li class="glide__slide">5</li>
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--right btn btn-primary" data-glide-dir="<">
          Next
      </button>
        {/*<button class="glide__arrow glide__arrow--right btn btn-primary" data-glide-dir="<">
          Next
  </button>*/}
      </div>
    </div>
  )
}

export default Glide
