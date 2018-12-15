

import React, {Component}from 'react'
import './Main.css'

import Header from './Headers/Headers'
import Lists from '../components/List/List'
import Button from '../components/Button/Button'


class Main extends Component {

  state = {
    dateTime: null,
    todoLists: [],
    btnInitialState: true,
    btnState: false,
    clickable: true,
    initialList: ''
  }

componentDidMount(){
  const date = new Date()
  this.setState({dateTime: date})
}

changeBtnState = (theState) => {
  theState === 'btnInitialState' ? this.setState({btnInitialState: !this.state.btnInitialState}) : this.setState({btnState: !this.state.btnState})
  this.setState({clickable: true})

}

changeOtherBtnState = (theState) => {
  theState === 'btnInitialState' ? this.setState({btnInitialState: !this.state.btnInitialState}) : this.setState({btnState: !this.state.btnState})
}


enterText = (e) => {
  let text = e.target.value
  if(text.length > 2) {this.setState({clickable: false})}
  this.setState({initialList: text})
}


enterList = (theState) => {
  let todo = {
    todo: this.state.initialList,
    time: new Date(),
    status: 'pending'
  }
  this.setState({
    todoLists: [...this.state.todoLists, todo],
    initialList: ''})
  this.changeOtherBtnState(theState)
}

listStatus = (listTodo) => {
  let list = this.state.todoLists.map((todo, index) => {
    if(todo.todo === listTodo){
      let newTodo = todo
      if(newTodo.status === 'pending'){
        newTodo.status = 'done'
      } else if (newTodo.status === 'done'){
        newTodo.status = 'pending'
      }
      return newTodo
    } else {
       return todo
    }
  })
  this.setState({todoLists: list})
  
}

deleteList = (i) => {
  let list = this.state.todoLists.filter((todo, index) => {
    if(index !== i){
      return todo
    } 
    return list
  })
  this.setState({todoLists: list})
}

render(){
  
  
    return (
      <div className='Outer'>
        <div className='Main'>  
          <Header 
            time={this.state.dateTime}
            lists={this.state.todoLists} />
          
          <Lists 
            listWidthToggler={this.state.btnInitialState}
            lists={this.state.todoLists}
            listStatus={this.listStatus}
            delete={this.deleteList}/>
          <Button 
            btnInitialState={this.state.btnInitialState}
            btnState={this.state.btnState}
            changeBtnState={this.changeBtnState}
            changeOtherBtnState={this.changeOtherBtnState}
            clickable={this.state.clickable}
            textValue={this.state.initialList}
            enterText={this.enterText}
            enterList={this.enterList} />
        </div>
      </div>
    )
  }
}


export default Main