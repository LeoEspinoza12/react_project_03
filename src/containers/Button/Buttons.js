import React, { Component } from 'react'
import Button from '../../components/Button/Button/Button'
import Input from '../../components/Button/Input/Input'
import './Buttons.css'

class Buttons extends Component {




  render() {



    return (

      <div className='Buttons'>
        <Button 
          btnValue={this.props.btnValue}
          clickSwitch={this.props.clickSwitch} />

        <Input 
          change={this.props.change}
          switch={this.props.switch}
          clickSwitch={this.props.clickSwitch}
          text={this.props.text} />
      </div>
    )
  }
}

export default Buttons
