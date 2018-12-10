

import React, { Component } from 'react'
import moment from 'moment'
import './Headtime.css'

class Headtime extends Component {





  render() {

  let month = moment(this.props.dateTime).format('MMMM');    
  let date = moment(this.props.dateTime).format('D');
  let day = moment(this.props.dateTime).format('dddd')

  console.log(month, date, day)

    return (
      <div className='Headtime'>
        <div className='Right'>
          <p></p>
          <p>{day}, <b>{date}<i>th</i></b></p>
          <p>{month}</p>
        </div>
      
      </div>
    )
  }
}

export default Headtime
