import React from "react";

export const SaveBtn = props => (
  <button {...props} className="custom-button col-md-2">
    {props.children}
  </button>
);
