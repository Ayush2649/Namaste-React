import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const heading = React.createElement("h1", { id: "heading" }, "Hello World");

console.log(heading);

const jsxHeading = <h1 id="heading">Hello World using JSX</h1>

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
