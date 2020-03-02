import React, { Component } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import fire from "./config/server";

class App extends Component {
  state = {
    notes: [],
    newNote: false
  };

  toggleClass = () => {
    this.setState({
      newNote: !this.state.newNote
    });
  };

  componentDidMount() {
    this.db = fire.database();
    this.listenForChange();
  }

  listenForChange() {
    this.db.ref("notes").on("child_added", snapshot => {
      let note = {
        id: snapshot.key,
        title: snapshot.val().title,
        body: snapshot.val().body
      };

      let notes = this.state.notes;
      notes.push(note);

      this.setState({
        notes: notes
      });
    });

    this.db.ref("notes").on("child_removed", snapshot => {
      let notes = this.state.notes;
      notes = notes.filter(note => note.id !== snapshot.key);

      this.setState({
        notes: notes
      });
    });
  }

  render() {
    return (
      <div className={this.state.newNote ? "App active" : "App"}>
        <Header toggleClass={this.toggleClass} newNote={this.state.newNote} />
        <NoteForm toggleClass={this.toggleClass} />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
