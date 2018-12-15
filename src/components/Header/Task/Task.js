import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import './Task.css'

const Task = (props) => {
  
    
    let classList = ['Top']
    if(props.lists.length === 0){
      classList.push('NoTask')
    }

    
  return (
    <CSSTransition
      in={props.lists.length > 0 ? true : false}
      timeout={200}
      classNames='task'>
        <div className='Task'>
          <div className={classList.join(' ')}>
            <div>{props.lists.length} 
              <i> Task{props.lists.length > 1 ? 's' : ''}</i>
            </div>
          </div>
        </div>
    </CSSTransition>
  )
}

export default Task