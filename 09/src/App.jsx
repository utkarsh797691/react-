import React, { useState } from 'react'

const App = () => {

  const [a, setA] = useState(10)
  const [username, setUsername] = useState('Utkarsh')

  function changenum(){
    setA(a+1);
    setUsername('utkarsh patel')
  }

  return (
    <div>
      <h1>Value of a is {a} <br/>value of user is{username}</h1>

      <button onClick={changenum}>
        Click
      </button>
    </div>
  )
}

export default App