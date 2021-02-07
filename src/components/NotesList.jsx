import { Component } from 'react';
import NoteCard from './NoteCard';

class NotesList extends Component {
  render() {
    return (
    <ul>
      <li>
        <NoteCard />
      </li>
    </ul>
    )
  }
}

export default NotesList;