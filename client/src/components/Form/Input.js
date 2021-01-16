import React from "react";

export function Inputs(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}
