import React, { Component } from 'react';
import './index.css';

class CategoryList extends Component {
  state = {  }

  _handleCreateCategory(e) {
    const hasPressEnter = (e.key === "Enter");

    if(hasPressEnter) this.props.createCategory(e.target.value);
    
  }
  render() { 
    return ( 
    <section className="category-list">
      <ul className="category-list_list">
        {this.props.categories.map((category, index) => {
          return (
            <li key={index} className="category-list_item">{category}</li>
          )
        })}
        
      </ul> 
      <input 
        className="category-list_input" 
        type="text" 
        placeholder="Insira uma categoria"
        onKeyUp={this._handleCreateCategory.bind(this)}
      />
    </section>
    );
  }
}
 
export default CategoryList;