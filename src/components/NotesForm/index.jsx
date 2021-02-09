import { Component } from 'react';

import './styles.css';
class NotesForm extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
    console.log(this.title);
  }
  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }
  _handleCreateNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props._createNote(this.title, this.text);
  }

  render() {
    return(
      <form onSubmit={this._handleCreateNote.bind(this)} className="notes-form">
        <input 
          onChange={this._handleChangeTitle.bind(this)}
          className="notes-form_input" type="text" placeholder="Título"
        />
        <textarea onChange={this._handleChangeText.bind(this)} rows={15} className="notes-form_input" placeholder="Escreva a sua nota"/>

        <button className="notes-form_input notes-form_submit">Criar nota</button>
      </form>
    )
  }
}

export default NotesForm;