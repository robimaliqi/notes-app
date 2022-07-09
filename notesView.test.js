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
  
    // 1. Fill the input
    const input = document.querySelector('#add-note-input');
    input.value = 'My new amazing test note';
  
    // 2. Click the button
    const button = document.querySelector('#add-note-btn');
    button.click();
  
    // 3. The note should be on the page
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
  });



module.exports = NotesView;