import React, { Component } from 'react';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';

import './assets/css/global.css';
import './assets/css/reset.css';
class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  createNote(title, text){
    const note = {title, text};
    const notes = [...this.state.notes, note];
    this.setState({notes});
  }

  deleteNote(index){
    let notes = this.state.notes;
    notes.splice(index,1);
    this.setState({notes});
  }
  render(){
    return (
      <section className="content">
        <NotesForm createNote={this.createNote.bind(this)}/>
        <NotesList removeNote={this.deleteNote.bind(this)}
         notes={this.state.notes}
        />
      </section>
    );
  }
}

export default App;
