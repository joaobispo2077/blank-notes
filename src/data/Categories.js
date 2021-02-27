export default class Categories {
  constructor() {
    this.categories = [];
    this._subscribers = [];
  }

  subscribe(fs) {
    this._subscribers.push(fs);

  }

  notify() {
    this._subscribers.forEach(fs => fs(this.categories));
  }

  createCategory(category) {
    this.category.push(category);
  }
}