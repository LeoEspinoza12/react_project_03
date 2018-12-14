import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import './Button.css'



const Button = (props) => {
  

    return (
      <div>

      <CSSTransition
        in={props.btnInitialState}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames='fadeBtn'
        onExited={()=>props.changeOtherBtnState('btnState')}>
          <div className='Button BtnOnly'>
            <div className="form-group Enter">
              <button 
                type="submit" 
                className="btn"
                onClick={()=>props.changeBtnState('btnInitialState')}>Add Todos</button>
            </div>
          </div>
      </CSSTransition>

      <CSSTransition
        in={props.btnState}
        timeout={300}
        mountOnEnter
        unmountOnExit
        onExited={()=>props.changeOtherBtnState('btnInitialState')}
        classNames='fadeAddBtn'>
          <div className='Button'>
            <div className="form-group Add">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Enter your todos"
                value={props.textValue}
                onChange={props.enterText} />
            </div>
            <div className="form-group Enter">
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={props.clickable}
                onClick={()=>props.enterList('btnState')}>Enter</button>
            </div>
          </div>
      </CSSTransition>
    </div>
    )
}

export default Button