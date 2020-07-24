import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.notes = [
      {
        id: 1,
        text: 'I have a pair of Jordan 1'
      },
      {
        id: 2,
        text: 'I have a pair of Jordan 3'
      },
      {
        id: 3,
        text: 'I have a pair of Jordan 4'
      },
      {
        id: 4,
        text: 'I have a pair of Jordan 11'
      }
    ]
  }

  render(){
    return(
      <div className="wrap">
        <header>Item you must have</header>
        <div className="container">
          <div className="notes">
            {
              this.notes.map((note)=>{
                return(
                  <div className="note one">
                    <input type="checkbox" id="first" name="first"></input>
                    <label for="first">{note.text}</label>
                </div>
                )
              })
            }
            <form action="#">
                <div className="note btn">
                  <button type="submit" className="btn btn-primary">Done</button>
                </div>
            </form>
          </div>
        </div>
    </div>
    )
  }
}

export default App;
