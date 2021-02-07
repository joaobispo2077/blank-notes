import { Component } from 'react';

class NotesForm extends Component {
  render() {
    return(
      <form>
        <input type="text" placeholder="Título"/>
        <textarea  placeholder="Escreva a sua nota"/>

        <button>Criar nota</button>
      </form>
    )
  }
}

export default NotesForm;