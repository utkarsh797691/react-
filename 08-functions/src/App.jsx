import React from 'react'

const 
App = () => {
  function inputChange(){
    console.log('User is Typing');
    
  }
  return (
    <div>
      <input onChange={inputChange} type="text" placeholder='Enter Name'/>
    </div>
  )
}

export default 
App