import { Component } from 'react';

import './styles.css';
class NotesForm extends Component {
  render() {
    return(
      <form className="notes-form">
        <input className="notes-form_input" type="text" placeholder="Título"/>
        <textarea className="notes-form_input" placeholder="Escreva a sua nota"/>

        <button className="notes-form_input notes-form_submit">Criar nota</button>
      </form>
    )
  }
}

export default NotesForm;