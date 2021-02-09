import React, { Component } from 'react';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';

import './css/global.css';
class App extends Component {
  render(){
    return (
      <section className="content">
        <NotesForm />
        <NotesList />
      </section>
    );
  }
}

export default App;
