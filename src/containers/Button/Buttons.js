import React, { Component } from 'react'
import Button from '../../components/Button/Button/Button'
import Input from '../../components/Button/Input/Input'
import './Buttons.css'

class Buttons extends Component {




  render() {
    let btnDisplay = null

      if(this.props.btnValue){
        btnDisplay = <Button 
                        btnValue={this.props.btnValue}
                        clickSwitch={this.props.clickSwitch} />
      }
      
      if(this.props.switch){
        btnDisplay = <Input 
                        change={this.props.change}
                        switch={this.props.switch}
                        clickSwitch={this.props.clickSwitch}
                        text={this.props.text} />
      }


    return (
      <div className='Buttons'>
        {btnDisplay}
      </div>
    )
  }
}

export default Buttons
