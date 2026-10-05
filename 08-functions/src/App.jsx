import React from 'react'

const 
App = () => {
  function inputChange(){
    console.log('User is Typing');
    
  }
  return (
    <div>
      <input onChange={function(elem){
        console.log(elem.target.value);
        
      }} type="text" placeholder='Enter Name'/>
    </div>
  )
}

export default 
App