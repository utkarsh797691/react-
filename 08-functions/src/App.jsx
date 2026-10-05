import React from 'react'

const 
App = () => {
  function btnClicked(){
    console.log('Button is clicked');
    
  }
  return (
    <div>
      <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default 
App