import React, { useState, useEffect } from 'react'

function UseEffect() {

  const [resourseType, setResourceType] = useState('posts')

  return (
    <>
      <button onClick={() => setResourceType('posts')} className="btn btn-primary">Posts</button>
      <button onClick={() => setResourceType('users')} className="btn btn-primary">Users</button>
      <button onClick={() => setResourceType('comments')} className="btn btn-primary">Comments</button>
      <h1>{resourseType}</h1>
    </>
  )
}

export default UseEffect
