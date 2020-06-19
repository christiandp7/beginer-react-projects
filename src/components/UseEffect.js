import React, { useState, useEffect } from 'react'

function UseEffect() {

  const [resourseType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourseType, windowWidth])

  return (
    <>
      <div>Window width: {windowWidth}</div>
      <button onClick={() => setResourceType('posts')} className="btn btn-primary">Posts</button>
      <button onClick={() => setResourceType('users')} className="btn btn-primary">Users</button>
      <button onClick={() => setResourceType('comments')} className="btn btn-primary">Comments</button>
      <h1>{resourseType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default UseEffect
