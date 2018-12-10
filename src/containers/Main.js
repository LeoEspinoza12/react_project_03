

import React, {Component}from 'react'
import './Main.css'


import Headtimer from './Headtimer/Headtimer'
import Buttons from './Button/Buttons'

class Main extends Component {

  state = {
    dateTime: [],
    todoLists: ['One', 'Two', 'Three', 'Four'],
    btnValue: true,
    buttonSwitch: false,
    todoText: '',
  }

componentDidMount(){
  const date = new Date()
  this.setState({dateTime: date})
}

toggleSwitch = () => {
  this.setState({
    buttonSwitch: !this.state.buttonSwitch,
    btnValue: !this.state.btnValue})
}

changeText = (e) => {
  let text = e.target.value;
  this.setState({todoText: text})
  
}

addText = () => {

}

render(){
  

    
    return (
      <div className='Main'>  
        <Headtimer 
          timeOfTheDay={this.state.dateTime}
          numberOfTask={this.state.todoLists.length}/>
        <Buttons
          btnValue={this.state.btnValue}
          switch={this.state.buttonSwitch}
          clickSwitch={this.toggleSwitch}
          change={this.changeText}
          text={this.state.todoText}
          addText={this.addText}/>
      </div>
    )

  }
}


export default Main