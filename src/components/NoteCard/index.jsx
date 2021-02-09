import React, { Component } from 'react';

import './styles.css';

class NoteCard extends Component {
  render() { 
    return (         
      <section className="note-card">
        <header className="note-card_header"><h3 className="note-card_title">{this.props.title}</h3></header>
        <p className="note-card_txt">{this.props.text}</p>
      </section> 
    );
  }
}
 
export default NoteCard;