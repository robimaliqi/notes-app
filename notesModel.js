class NotesModel {
  constructor() {
    this.notes = []
  }

  getNotes() {
    return this.notes
  }

  addNote(note) {
    this.notes.push(note)
  }

  reset() {
    this.notes = []
  }

}

module.exports = NotesModel;


// const model = new NotesModel();

// model.getNotes(); // should return []

// model.addNote('Buy milk');