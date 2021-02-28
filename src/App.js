import React, { Component } from 'react';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import CategoryList from './components/CategoryList';

import './assets/css/global.css';
import './assets/css/reset.css';

import Categories from "./data/Categories";
import Notes from "./data/Notes";
class App extends Component {

  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new Notes();
  }

  render() {
    return (
      <section className="content">
        <NotesForm
          createNote={this.notes.createNote.bind(this.notes)}
          categories={this.categories}
        />
        <main className="main-content">
          <CategoryList
            createCategory={this.categories.createCategory.bind(this.categories)}
            categories={this.categories}
          />
          <NotesList
            removeNote={this.notes.deleteNote.bind(this.notes)}
            notes={this.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
