import React, { Component } from 'react';

import removeIcon from '../../assets/svg/x.svg';
import './styles.css';

class NoteCard extends Component {
  handleDeleteNote() {
    const index = this.props.index;
    this.props.deleteNote(index);
  }
  render() { 
    return (         
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="note-card_title">{this.props.title}</h3>
          <img className="note-card_delete" onClick={this.handleDeleteNote.bind(this)} src={removeIcon} />
        </header>
        <p className="note-card_txt">{this.props.text}</p>
      </section> 
    );
  }
}
 
export default NoteCard;