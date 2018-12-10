import React from 'react'
import './Task.css'

const Task = (props) => {
  
  
  let fontColor = props.numberOfTask === 0 ? 'NoColor' : 'WithColor'

  return (
    
    <div className='Task'>
       <p></p>
       <p 
        className={fontColor}>
          {props.numberOfTask} 
          <i> Task{props.numberOfTask > 1 ? 's' : ''}</i></p>
    </div>
  )
}

export default Task