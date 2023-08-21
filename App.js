import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


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



const biggiesBurger={
  name:"Burger King",
  image:"https://img.freepik.com/premium-vector/burger-logo-vector-art-design_260747-237.jpg?w=2000",
  cuisines:["Burger", "American"],
  rating:"4.2"
}




const RestrauntCard=() =>{
  return(
    <div className="card">
      <img src={biggiesBurger.image}></img>
      <h2>{biggiesBurger.name}</h2>
      <h3>{biggiesBurger.cuisines.join(",")}</h3>
      <h4>{biggiesBurger.rating}</h4>
    </div>
  );
};




const Body= () =>{
  return(
    <div>
      <RestrauntCard/>
    </div>
  );
};


const Footer=() =>{
  return(
    <h2>Footer</h2>

  )
 
}


const AppLayout=() =>{
  return(
    <>
    <HeadingComponent/>
    <Body/>
    <Footer/>
    </>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
