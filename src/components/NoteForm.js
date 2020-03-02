import React, { Component } from "react";
import fire from "../config/server";

class NoteForm extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      body: "",
      err: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createNote = () => {
    if (this.state.body !== "" && this.state.title !== "") {
      fire
        .database()
        .ref("notes")
        .push({ title: this.state.title, body: this.state.body });

      this.setState({
        title: "",
        body: "",
        err: ""
      });

      this.props.toggleClass();
    } else {
      this.setState({
        err: "Wpisz tytuł oraz teść notatki"
      });
    }
  };

  render() {
    return (
      <div className="note-form">
        <h3>Stwórz nową notatkę</h3>
        <div className="note-form-group">
          <label htmlFor="title">Tytuł</label>
          <input
            name="title"
            type="text"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder="Tytuł mojej nowej notatki.."
          />
        </div>
        <div className="note-form-group">
          <label htmlFor="body">Notatka</label>
          <textarea
            id="form-note-body"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
            placeholder="Treść mojej nowej notatki.."
          ></textarea>
          {this.state.err ? <p className="err">{this.state.err}</p> : null}
        </div>
        <button className="note-form-btn" onClick={this.createNote}>
          Dodaj notatkę
        </button>
      </div>
    );
  }
}

export default NoteForm;
