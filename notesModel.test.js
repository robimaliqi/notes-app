const NotesModel = require('./notesModel')

describe(".getNotes", () => {
  it("returns an empty array", () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([])
  })

  it("returns buy milk when it gets added to our notes", () => {
    const model = new NotesModel();
    model.addNote('Buy Milk');
    expect(model.getNotes()).toEqual(['Buy Milk'])
  })
  it("returns buy milk and go to the gym when it gets added to our notes", () => {
    const model = new NotesModel();
    model.addNote('Buy Milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy Milk', 'Go to the gym'])
  })

  it("resets to empty array", () => {
    const model = new NotesModel();
    model.addNote('Buy Milk');
    model.reset();
    expect(model.getNotes()).toEqual([])
  })
});

