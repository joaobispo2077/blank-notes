import React, { Component } from 'react';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import CategoryList from './components/CategoryList';

import './assets/css/global.css';
import './assets/css/reset.css';
class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: [],
      categories: []
    };
  }

  createNote(title, text, category) {
    const note = { title, text, category };
    const notes = [...this.state.notes, note];
    this.setState({ notes });
  }

  deleteNote(index) {
    let notes = this.state.notes;
    notes.splice(index, 1);
    this.setState({ notes });
  }

  createCategory(category) {
    const categoryAlreadyExists = this.state.categories.includes(category);
    if (!categoryAlreadyExists) {
      const categories = [...this.state.categories, category];
      this.setState({ categories });
    }
  }
  render() {
    return (
      <section className="content">
        <NotesForm
          createNote={this.createNote.bind(this)}
          categories={this.state.categories}
        />
        <main className="main-content">
          <CategoryList
            createCategory={this.createCategory.bind(this)}
            categories={this.state.categories}
          />
          <NotesList
            removeNote={this.deleteNote.bind(this)}
            notes={this.state.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
