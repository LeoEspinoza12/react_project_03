import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition'
import './Input.css';

const Input = (props) => {


  let disabled = props.text.length > 1 ? false : true



  
  return (

    <div className='Input'>
      <CSSTransition
        in={props.switch}
        timeout={1000}
        unmountOnExit
        mountOnEnter
        classNames='add-button'>
          <div>

            <div>
              <input 
                type="text" 
                placeholder='Enter your list' 
                value={props.text}
                onChange={props.change} />
            </div>
            <div>
              <button 
                disabled={disabled}
                onClick={props.clickSwitch}>add</button>
            </div>

            <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">With textarea</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
          </div>
       </CSSTransition>
    </div>
  )
}

export default Input
