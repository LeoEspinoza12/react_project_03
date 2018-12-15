import React from 'react'

import Header from '../../components/Header/Header/Header'
import Task from '../../components/Header/Task/Task'
import './Headers.css'


const Heading = (props) => {
  
  
    
    
    
    return (
        <div className='Header'>
            <Header time={props.time} />
            <Task lists={props.lists}/>
        </div>
    )
}

export default Heading