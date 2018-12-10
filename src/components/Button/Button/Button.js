

import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'


import './Button.css'

const Button = (props) => {


  return (
    <CSSTransition
      in={props.btnValue}
      timeout={1000}
      unmountOnExit
      mountOnEnter
      classNames='add-button'>
          <div className='Button'>
            <div className='Margin'>
              <div 
                className='Circle'
                onClick={props.clickSwitch}>
                  <div></div>
                  <div></div>
              </div>
            </div>
          </div>
    </CSSTransition>
  )
}

export default Button