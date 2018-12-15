import React from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'

import moment from 'moment'
import './List.css'


const List = (props) => {

  let listClassWidth = ['List']
  if(!props.listWidthToggler) {listClassWidth.push('widthAdd')}

let list = null;

if(props.lists.length === 0){
  list = <CSSTransition
          in={props.lists.length === 0}
            timeout={100}
                mountOnEnter
                  classNames='fade-ads'>
            <div className='Ads'>
              <div>
                <div>Your Ads Here</div>
                <p>&copy; aimanski.com</p>
              </div>
            </div>
          </CSSTransition>

} else {

  
  let doneClass = []
  
  list = props.lists.map((list, i) =>{
    
    if(list.status === 'pending'){
      doneClass = ['list-group-item']
    } else if(list.status === 'done'){
      doneClass = ['list-group-item', 'textDone']
    }
    
    return (
      <CSSTransition
      key={i}
      in={props.lists.length >= 1}
      timeout={100}
      unmountOnExit
      mountOnEnter
      classNames='fade-lists'>

        <li className={doneClass.join(' ')}>
          <input 
            className="form-check-input" 
            type="checkbox" 
            onClick={()=>props.listStatus(list.todo)}/>{list.todo}
          <i className="far fa-trash-alt fa-pull-right"
            onClick={() => props.delete(i)} ></i>
          <span className='fa-pull-right'>{moment(list.time).format('h:mm a')}</span>
        <hr />
        </li> 
      </CSSTransition>
    )
  })
}
  
  


  return (
    <div className={listClassWidth.join(' ')}>
          <TransitionGroup component='ul' className='list-group'>
            {list}  
          </TransitionGroup>
    </div>
  )
}

export default List