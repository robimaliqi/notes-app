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

   it('clicks button', () => {
     //Arrange
     document.body.innerHTML = fs.readFileSync('./index.html');

     const view = new NotesView();

     //Act
     const buttonEl = document.querySelector('#show-button-message');
     buttonEl.click();

     //Assert
     expect(document.querySelector('#message')).not.toBeNull();
   })
});



module.exports = NotesView;