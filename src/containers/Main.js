

import React, {Component}from 'react'
import './Main.css'



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

      <div className='Outer'>


      <div className='Main'>  

        {/* header section */}
        <div className='Header'>

          {/* Date */}
          <div className='Date'>
            <div>Monday, <i>10th</i></div>
            <div>December</div>
          </div>  

          {/* Task */}
          <div className='Task'>
            <div className='Top'>
              <div>10 <i>Tasks</i></div>
            </div>
          </div>

          {/* Add */}
          
        </div>



       

  

      {/* Lists */}
        <div className='List'>
          <ul className="list-group">
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Run 5k
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li> 
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Wash Laundry dsaf asdf adsf adsf 
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Cook Dinner
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Clean House
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Run 5k
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Wash Laundry dsaf asdf adsf adsf
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Cook Dinner
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Clean House
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Run 5k
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Wash Laundry dsaf asdf adsf adsf
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Clean House
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Run 5k
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Wash Laundry dsaf asdf adsf adsf
              <i className="far fa-trash-alt fa-pull-right" ></i>
            </li>
            <hr />
              <li className="list-group-item">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Clean House
              <i className="far fa-trash-alt fa-pull-right" ></i>
              </li>
              <hr />
              <li className="list-group-item">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Run 5k
              <i className="far fa-trash-alt fa-pull-right" ></i>
              </li>
              <hr />
              <li className="list-group-item">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />Wash Laundry dsaf asdf adsf adsf
              <i className="far fa-trash-alt fa-pull-right" ></i>
              </li>
              <hr />
          </ul>
        </div>




{/* this area is add */}
  <div className='AddField'>
    <div className="form-group Add">
      <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your todos" />
    </div>
    <div className="form-group Enter">
      <button type="submit" className="btn btn-primary">Enter</button>
    </div>
  </div>




      </div>

      </div>
    )

  }
}


export default Main