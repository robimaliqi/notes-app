class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl = addEventListener('click', () => {
      this.displayNotes();
    });
  }
  
  displayNotes() {
    const notes = this.model.getNotes()

  
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }
}

module.exports = NotesView;