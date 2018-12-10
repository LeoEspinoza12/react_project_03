import React from 'react';
import './Input.css';

const Input = (props) => {


  let disabled = props.text.length > 1 ? true : false
  console.log(disabled)

  return (

    <div className='Input'>
      
        <div>
          <input 
            type="text" 
            placeholder='Enter your list' 
            value={props.text}
            onChange={props.change} />
        </div>
        <div>
          <button disabled={disabled}
            onClick={props.clickSwitch}>add</button>
        </div>
      
    </div>
  )
}

export default Input
