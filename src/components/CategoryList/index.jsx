import React, { Component } from 'react';
import './index.css';

class CategoryList extends Component {
  state = {  }
  render() { 
    return ( 
    <section className="category-list">
      <ul className="category-list_list">
        <li className="category-list_item">Categoria</li>
      </ul> 
      <input className="category-list_input" type="text" />
    </section>
    );
  }
}
 
export default CategoryList;