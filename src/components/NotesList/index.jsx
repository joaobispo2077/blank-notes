import { Component } from 'react';
import NoteCard from '../NoteCard';

import './styles.css';
class NotesList extends Component {

  render() {
    return (
    <ul className="note-list">
      {this.props.notes.map((note, index) => {
        return (
          <li className="note-list_item" key={index}>
            <NoteCard title={note.title} text={note.text} />
          </li>
        )
      })}

    </ul>
    )
  }
}

export default NotesList;