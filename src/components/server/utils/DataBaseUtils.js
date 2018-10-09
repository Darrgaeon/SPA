const mongoose = require("mongoose");
const Note = require("../models/Note");

function setUpConnection() {
  mongoose.connect("mongodb://localhost:27017/notes", {useNewUrlParser: true});
}

function listNotes() {
  return Note.find();
}

function createNote(data) {
  const note = new Note({
    title: data.title,
    text: data.text,
    color: data.color,
    createdAt: new Date()
  });

  return note.save();
}

function deleteNote(id) {
  return Note.findById(id).remove();
}

module.exports = {setUpConnection, listNotes, createNote, deleteNote};
