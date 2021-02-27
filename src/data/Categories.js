export default class Categories {
  constructor() {
    this.categories = [];
    this._subscribers = [];
  }

  subscribe(fs) {
    this._subscribers.push(fs);
  }

  unsubscribe(fs) {
    this._subscribers = this._subscribers.filter(f => f !== fs);
  }

  notify() {
    this._subscribers.forEach(fs => fs(this.categories));
  }

  createCategory(category) {
    this.categories.push(category);
    this.notify();
  }
}