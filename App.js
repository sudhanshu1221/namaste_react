//import from node_modules
import React from "react";
import ReactDOM from "react-dom/client";
/*
//this below line creates a react element using react fundamentals
//js object
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//JSX-html or xml like syntax
//this below also creates a react element but by jsx
//js object
//this below syntax is not understandable by jsEngine or ES6
//JSX code is transpilled before it reaches the JS(this is done by parcel which have babel dependency which converts it )
//logic for below line
//JSX--Babel converts it into React.createElement-React Element(JS object)--rendered as HTML
//for multiline jsx use()*/

//React ELement
// const jsxHeading = <h1>Hello from jsx side</h1>;
//components
//class based--OLD
//functional based--NEW
//REACT FUNCTIONAL COMPONENT(it is nothing just a js fn which returns jsx i.e react element) (function name should be capitals)
const Title = () => {
  return <h1> Hi from title of page</h1>;
};
//this below is example of component composition
const title = <h1 className="title"> Hello from title</h1>;
const Heading = () => {
  return (
    <div id="container">
      {title}
      <Title></Title>
      <Title />
      {Title()}
      <h1>Hello from component</h1>
    </div>
  );
};
//call a component using <Component/>
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
// //we can put component inside react element or vica versa or any combination
//inside jsx just {write any javascript here}

// //Below is eg of component inside the react element or jsx
// const Heading = () => {
//   return <h1> hello from Heading</h1>;
// };

// const title = (
//   <>
//     <h1> Hello from title</h1>
//     <Heading />
//   </>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(title);

// //to use react element or jsx inside component use curly braces as react element is just an variable like title above
