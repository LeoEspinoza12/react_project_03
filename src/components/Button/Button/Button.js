

import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'


import './Button.css'

const Button = (props) => {


  return (
    <div className='Button'>
      <CSSTransition
        in={props.btnValue}
        timeout={1000}
        unmountOnExit
        mountOnEnter
        classNames='add-button'>
              <div className='Margin'>
                <div 
                  className='Circle'
                  onClick={props.clickSwitch}>
                    <div></div>
                    <div></div>
                </div>
              </div>
      </CSSTransition>
    </div>
  )
}

export default Button