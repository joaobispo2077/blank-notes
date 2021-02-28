export default class Notes {
  constructor() {
    this.notes = [];
    this._subscribers = [];
  }

  subscribe(fs) {
    this._subscribers.push(fs);
  }

  unsubscribe(fs) {
    this._subscribers = this._subscribers.filter(f => f !== fs);
  }

  notify() {
    this._subscribers.forEach(fs => fs(this.notes));
  }
  
  createNote(title, text, category) {
    const note = new Note(title, text, category);
    this.notes.push(note);
    this.notify();
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }
}

class Note {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }  
}