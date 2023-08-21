import React from "react";
import ReactDOM from "react-dom/client";

//REACT ELEMENTS
// React.createElement= object= HTML(DOM);
const Heading = () => (
  <a href="/">
  <img 
  className="logo"
  alt="logo"
  src="https://static.vecteezy.com/system/resources/previews/008/799/559/original/vintage-retro-restaurant-classic-food-with-fork-spoon-and-dish-design-concept-emblem-logo-template-free-vector.jpg">
  </img>
  </a>

);



//COMPONENTS
//Functional Component
const HeadingComponent = () => {
  return (
   
  <div className="header">
    <Heading/>
    <div className="nav-items">
      <ul>
        <li>Home </li>
        <li>About US</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  );
};


const appLayout=() =>{
  return(
    <Heading/>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
