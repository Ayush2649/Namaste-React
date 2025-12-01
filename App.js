import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Hello World</h1>;

const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <Title />
      <Title></Title>
      <h1>Hello from HeadingComponent. Hii!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
