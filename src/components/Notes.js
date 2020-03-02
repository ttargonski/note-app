import React, { Component } from "react";
import fire from "../config/server";

class Notes extends Component {
  constructor(props) {
    super();
  }

  removeNote(id) {
    fire
      .database()
      .ref("notes")
      .child(id)
      .remove();
  }

  render() {
    return (
      <div className="notes-wrapper">
        {this.props.notes.map(note => (
          <div key={note.id} className="note-box">
            <div className="note-title">
              <h2>{note.title}</h2>
              <button onClick={() => this.removeNote(note.id)}>+</button>
            </div>
            <div className="note-content">
              <p>{note.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Notes;
