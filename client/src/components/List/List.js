import React from "react";
import "./List.css";

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul id="facts"className="list-group">{children}</ul>
    </div>
  );
}
