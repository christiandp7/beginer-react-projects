import React, { useState } from 'react'

function UseState() {

  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('primary')

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  function changeTheme() {
    setTheme(currentTheme => {
     if(currentTheme == 'primary') {
      return 'danger'
     } else {
      return 'primary'
     }
    });
  }

  return (
    <>
      <button onClick={changeTheme} className="btn btn-info">Change Theme</button>
      <br/>
      <button onClick={decrementCount} className={`btn btn-${theme}`}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount} className={`btn btn-${theme}`}>+</button>
    </>
  )
}

export default UseState
