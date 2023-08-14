import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transplied before it reaches the JS) - Parcel - Babel

// JSX => React.createElement => Object => HTMLElement(render)
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    React using JSX
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
