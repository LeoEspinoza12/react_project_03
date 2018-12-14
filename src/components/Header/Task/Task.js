import React from 'react'
import './Task.css'

const Task = (props) => {
  
    
    let classList = ['Top']
    if(props.lists.length === 0){
      classList.push('NoTask')
    }

    
  return (
    <div className='Task'>
     
       <div className={classList.join(' ')}>
        <div>{props.lists.length} <i>Task{props.lists.length > 1 ? 's' : ''}</i></div>
      </div>


    </div>

  )
}

export default Task