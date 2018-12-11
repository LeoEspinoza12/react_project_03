

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

        {/* header section */}
        <div className='Header'>

          {/* Date */}
          <div className='Date'>
            <div>
              Monday, <b>10<i>th</i></b>
            </div>
            <div>
                December
            </div>
          </div>  

          {/* Task */}
          <div className='Task'>
            <div className='Top'>
              <div>10 <i>Tasks</i></div>
            </div>
          </div>

          {/* Add */}
          <div className='Add'>
            <div className='Top'>
              <div>Create</div>
            </div>
          </div>
        </div>



      {/* Input Icon */}
        <div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter your todo's" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          
          </div>
        </div>

  

      {/* Lists */}
      {/* <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input"/>
          </div>
        </div>
        <input type="text" className="form-control" aria-label="Text input with checkbox" />
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox" aria-label="Radio button for following text input" />
          </div>
        </div>
        <input type="text" className="form-control" aria-label="Text input with radio button" />
      </div> */}



      </div>





    )

  }
}


export default Main