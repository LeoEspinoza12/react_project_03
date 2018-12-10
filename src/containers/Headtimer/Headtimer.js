import React, { Component } from 'react'

import Headtime from '../../components/Heading/Headtime/Headtime'
import Task from '../../components/Heading/Task/Task'
import './Headtimer.css'


class Heading extends Component {
  
  
  render() {
    
    
    
    return (
      <div className='Headtimer'>
        <Headtime 
          dateTime={this.props.dateTime}/>
        <Task 
          numberOfTask={this.props.numberOfTask}/>
      </div>
    )
  }
}

export default Heading