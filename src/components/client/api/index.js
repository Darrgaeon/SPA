import axios from "axios";

const config = require("../../etc/config");

function listNotes() {
  return axios.get(`${config.apiPrefix}/notes`);
}

function createNote(data) {
  return axios.post(`${config.apiPrefix}/notes`, data);
}

function deleteNote(noteId) {
  return axios.delete(`${config.apiPrefix}/notes/${noteId}`);
}

module.exports = {listNotes, createNote, deleteNote};

