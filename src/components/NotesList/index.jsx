import { Component } from 'react';
import NoteCard from '../NoteCard';

import './styles.css';
class NotesList extends Component {
  render() {
    return (
    <ul className="note-list">
      {Array.of("Trabalho", "Faculdade", "Estudos").map((category, index) => {
        return (
          <li className="note-list_item" key={index}>
            <legend>{category}</legend>
            <NoteCard />
          </li>
        )
      })}

    </ul>
    )
  }
}

export default NotesList;