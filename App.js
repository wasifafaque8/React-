import React from "react";
import ReactDOM from "react-dom/client";

//REACT ELEMENTS
// React.createElement= object= HTML(DOM);
const heading = (
  <h1 id="title" key="h2">
    Namastey Wasif
  </h1>
);



//COMPONENTS
//Functional Component
const HeadingComponent = () => {
  return (
   
    <div>
       {heading}
      <h1>Kaisa hai bhai </h1>
      <h2>Theek hu....apna suna</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
