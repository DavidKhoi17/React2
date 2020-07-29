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
          text: 'Jordan 1'
        },
        {
          id: 2,
          text: 'Jordan 3'
        },
        {
          id: 3,
          text: 'Jordan 4'
        },
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
                    <div class="text">
                      <input type="checkbox" id="first" name="first"></input>
                      <label for="first">{note.text}</label>
                    </div>
                    <i id={note.id} className="fas fa-trash-alt" onClick={this.handleNoteDelete}></i>
                </div>
                )
              })
            }
            <form action="#">
                <div className="note btn">
                  <input type="text" className="form-control" id="note-input" value={this.state.noteInputValue} onChange={this.handleNoteInputChange}/>
                  <button type="submit" className="btn btn-primary" onClick={this.handleAddBtn}>Add</button>
                </div>
            </form>
          </div>
        </div>
    </div>
    )
  }
}

export default App;
