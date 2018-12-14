import React from 'react'

import moment from 'moment'
import './List.css'


const List = (props) => {

    let listClassWidth = ['List']
    if(!props.listWidthToggler) {listClassWidth.push('widthAdd')}

  let list = props.lists.map((list, i) =>{
    return (
      <div key={i}>
        <li className="list-group-item">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />{list.todo}
          <i className="far fa-trash-alt fa-pull-right" ></i>
          <span className='fa-pull-right'>{moment(list.time).format('h:mm a')}</span>
        </li> 
        <hr />
      </div>
    )
  })

  console.log(listClassWidth)


  return (
    <div className={listClassWidth.join(' ')}>
      <ul className="list-group">
        {list}
      </ul>
    </div>
  )
}

export default List