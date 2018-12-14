

import React from 'react'
import moment from 'moment'
import './Header.css'

const Header = (props) => {

  let time = props.time
  let day = moment(time).format('Do')
  let date = moment(time).format('dddd')
  let month = moment(time).format('MMMM')

    return (
      <div className='Date'>
        <div>{date}, <i>{day}</i></div>
        <div>{month}</div>
      </div>
    )
}

export default Header
