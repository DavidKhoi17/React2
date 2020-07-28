import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      notes: [
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
        },
        {
          id: 5,
          text: 'I have a pair of Jordan 5'
        },
        {
          id: 6,
          text: 'I have a pair of AF1 ParaNoise'
        }
      ],
      noteInputValue: ''
    }
  }

  handleNoteInputChange = (e)=>{
    this.setState({noteInputValue:e.target.value})
  }

  handleAddBtn = (e)=>{
    console.log(e.target)
    e.preventDefault()
    var notes = {
      id: Date.now(),
      text: this.state.noteInputValue
    }
    var newNotes = [notes, ...this.state.notes]

    this.setState({
      notes:newNotes,
      noteInputValue: ''
    })
  }

  handleNoteDelete = (e)=>{
    var noteIdToDelete = parseInt(e.target.id)
    var notes = this.state.notes
    var filteredNotes = notes.filter((item)=>{
      return item.id !== noteIdToDelete
    })

    this.setState({notes:filteredNotes})
  }

  render(){
    return(
      <div className="wrap">
        <header>Item you must have</header>
        <div className="container">
          <div className="notes">
            {
              this.state.notes.map((note)=>{
                return(
                  <div className="note one" key={note.id}>
                    <i id={note.id} className="far fa-times-circle note-remove" onClick={this.handleNoteDelete}></i>
                    <input type="checkbox" id="first" name="first"></input>
                    <label for="first">{note.text}</label>
                </div>
                )
              })
            }
            <form action="#">
                <div className="note btn">
                  <input type="text" className="form-control" id="note-input" value={this.state.noteInputValue} onChange={this.handleNoteInputChange}/>
                  <button type="submit" className="btn btn-primary" onClick={this.handleAddBtn}>Done</button>
                </div>
            </form>
          </div>
        </div>
    </div>
    )
  }
}

export default App;
