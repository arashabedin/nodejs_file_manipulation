console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
var titleObj = {
    describe:'title of note',
    demand: true,
    alias:'t'
};
var bodyObj =  {
    describe:'body of note',
    demand:true,
    alias:'b'
};
const argv = yargs
.command('add','Add a new note',{
    title:titleObj,
    body:bodyObj
   
})
.command('list','List all notes')
.command('read', 'Read the note',{
    title:titleObj
})
.command('remove', 'Remove the titile',{
    title:titleObj
})
.argv;
var command = argv._[0];
console.log(`Commands: ${command}` );
console.log(`Yargs: ${argv}`);

if(command === 'add'){
var note = notes.addNote(argv.title,argv.body);
if(note){
    console.log("Note created");
    console.log("--");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    } else{
    console.log("Note title taken")
    }

} else if (command === 'read') {

var note = notes.getNote(argv.title);
note? console.log(note):console.log("Note not found");

} else if (command === 'list') {

    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);

    allNotes.forEach(element => {
        console.log(`Title : ${element.title}` );
        console.log(`Body : ${element.body}` );
    });
    } 
    
 else if (command === 'remove'){ 

var noteRemoved = notes.removeNote(argv.title);
var message = noteRemoved ? "Note is removed" : "Note not found";
console.log(message);

}else {
console.log('Command not recognized');

}