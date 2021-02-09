import React, { Component } from 'react';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';

import './assets/css/global.css';
import './assets/css/reset.css';
class App extends Component {

  createNote(title, text){
    
  }
  render(){
    return (
      <section className="content">
        <NotesForm createNote={this.createNote}/>
        <NotesList />
      </section>
    );
  }
}

export default App;
