import React from "react";
import "./NavBar.sass";

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <h1>Mon Bar</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => props.filter(e.target.value)}
      />
    </div>
  );
}
