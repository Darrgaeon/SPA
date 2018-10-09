import React from "react";
import Note from "./note";

const Masonry = require("react-masonry-component");
import "./notesGrid.sass";


class NotesGrid extends React.Component {
  render() {
    return (
      <Masonry className='NotesGrid'>
        {this.props.notes.map(note =>
          <Note
            key={note.id}
            title={note.title}
            onDelete={this.props.onNoteDelete.bind(null, note)}
            color={note.color}
          >
            {note.text}
          </Note>
        )
        }
      </Masonry>
    );
  }
}

export default NotesGrid;