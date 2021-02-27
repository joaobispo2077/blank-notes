export default class Notes {
  constructor() {
    this.notes = [];
    this._subscribers = [];
  }

  subscribe(fs) {
    this._subscribers.push(fs);

  }

  notify() {
    this._subscribers.forEach(fs => fs(this.notes));
  }
  
  createNote(title, text, category) {
    const note = new Note(title, text, category);
    this.notes.push(note);
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
  }
}

class Note {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }  
}