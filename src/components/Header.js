import React from "react";

const Header = props => (
  <header className="note-header">
    <h3 className="main-title">Notatnik</h3>
    <button className="note-show-form" onClick={props.toggleClass}>
      <span className="note-plus">+</span>
    </button>
  </header>
);

export default Header;
