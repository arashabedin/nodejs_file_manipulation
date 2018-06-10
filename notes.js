console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
   return JSON.parse(notesString);
    }
    catch(e){
      return [];
    }
};

var saveNotes = (notes) => {
  fs.writeFile('notes-data.json',JSON.stringify(notes));

};


var addNote = (title, body) => {
  var notes = fetchNotes();
  var note= {
    title,
    body
  };


  var duplicateNote = notes.filter((note) => note.title === title);


  if(duplicateNote.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }


};

var getAll = () => {
var notes = fetchNotes();
return notes;
};

var getNote = (title) => {
var notes = fetchNotes();
var filteredNote = notes.filter( item => item.title === title );
console.log(filteredNote.length);
return filteredNote.length > 0 ? filteredNote[0] : false;
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var duplicateNote = notes.filter((note) => note.title === title);
  if(duplicateNote !== 0){
   var index = notes.indexOf(duplicateNote[0]);
   notes.splice(index,1);
  }
  saveNotes(notes);
  return duplicateNote.length>0;

};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};