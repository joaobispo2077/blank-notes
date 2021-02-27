import { Component } from 'react';
import NoteCard from '../NoteCard';

import './styles.css';
class NotesList extends Component {
  
  constructor() {
    super();
    this.state = { notes: [] };
    this._updateNotes = this._handleSubscribeNotes.bind(this);
  }

  componentDidMount() {
    this.props.notes.subscribe(this._updateNotes);
  }

  componentWillUnmount() {
    this.props.notes.unsubscribe(this._updateNotes);
  }

  _handleSubscribeNotes(notes) {
    this.setState({...this.state ,notes});
  }

  render() {
    return (
      <ul className="note-list">
        {this.state.notes.map((note, index) => {
          return (
            <li className="note-list_item" key={index}>
              <NoteCard
                index={index}
                deleteNote={this.props.removeNote}
                title={note.title} text={note.text}
                category={note.category}
              />
            </li>
          )
        })}

      </ul>
    )
  }
}

export default NotesList;