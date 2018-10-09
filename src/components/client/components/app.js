import React from "react";

import NotesStore from "../stores/notesStore";
import NotesActions from "../actions/notesActions";
import NoteEditor from "./noteEditor";
import NotesGrid from "./notesGrid";

import "./app.sass";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: NotesStore.isLoading(),
      notes: NotesStore.getNotes()
    };

    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
    this._onChange = this._onChange.bind(this);
  }


  UNSAFE_componentWillMount() {
    NotesActions.loadNotes();
  }

  componentDidMount() {
    NotesStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    NotesStore.removeChangeListener(this._onChange);
  }

  handleNoteDelete(note) {
    NotesActions.deleteNote(note.id);
  }

  handleNoteAdd(noteData) {
    NotesActions.createNote(noteData);
  }

  render() {
    return (
      <div className="App">
        <h2 className="App__header">NotesApp</h2>
        <NoteEditor onNoteAdd={this.handleNoteAdd}/>
        <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
      </div>
    );
  }

  _onChange() {
    this.setState({
      isLoading: NotesStore.isLoading(),
      notes: NotesStore.getNotes()
    });
  }
}

export default App;