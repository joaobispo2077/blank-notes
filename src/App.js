import React, { Component } from 'react';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';

class App extends Component {
  render(){
    return (
      <section>
        <NotesForm />
        <NotesList />
      </section>
    );
  }
}

export default App;
