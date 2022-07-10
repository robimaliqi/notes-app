/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView');
 
 describe('Notes view', () => {
   it('displays 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
 
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');
    model.addNote('Another one');

    view.displayNotes();
 
    expect(document.querySelectorAll('div.note').length).toEqual(2);
   });

   it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
  
  
    const inputEl = document.querySelector('#add-note-input');
    inputEl.value = 'My new amazing test note';
  
    const buttonEl = document.querySelector('#add-note-btn');
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
  });

  it('clear the list of previous notes before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('one');
    model.addNote('two');
  
    view.displayNotes();
    view.displayNotes();
  
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
 });