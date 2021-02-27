import { Component } from 'react';

import './styles.css';
class NotesForm extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "Sem categoria";
    this.state = { categories: [] };
    this.updateCategories = this._handleUpdateCategories.bind(this);
  }

  componentDidMount() {  
    this.props.categories.subscribe(this.updateCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this.updateCategories);
  }

  _handleUpdateCategories(categories) {
    this.setState({ ...this.categories, categories });
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }
  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }
  _handleChangeCategory(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }
  _handleCreateNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <form onSubmit={this._handleCreateNote.bind(this)} className="notes-form">
        <select onChange={this._handleChangeCategory.bind(this)} className="notes-form_inp">
          <option selected="selected">Sem categoria</option>
          {this.state.categories.map((category, index) => {
            return <option key={index}>{category}</option>
          })}
        </select>

        <input
          onChange={this._handleChangeTitle.bind(this)}
          className="notes-form_input" type="text" placeholder="Título"
        />
        <textarea onChange={this._handleChangeText.bind(this)} rows={15} className="notes-form_input" placeholder="Escreva a sua nota" />

        <button className="notes-form_input notes-form_submit">Criar nota</button>
      </form>
    )
  }
}

export default NotesForm;