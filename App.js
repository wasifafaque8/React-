import React from "react";
import ReactDOM  from "react-dom/client";


// React.createElement= object= HTML(DOM);
const heading=(
  <h1 id="title" key="h2">
    Namastey Wasif
  </h1>
)


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);