//First, you created a React element representing an <h1> tag with some text.
// Next, you created a root where React will render your component.
// Finally, you rendered that element into the DOM, so the browser displays "Hello World from React" inside an <h1> tag.
//CREATEELEMENT is js object
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );
//crate an structure like this
/*
<div id='parent'> 
<div id='child'>
<h1> I am an h1 tag</h1>
</div>
</div>
ReactElement is just and js object it is converted to HTML during the render 
*/
//type,attributes(props),child
//multiple childs can be given as an array to last parameter
const parent = React.createElement(
  "div",
  { id: "parent" },

  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am an h1 tag."),
      React.createElement("h2", {}, "I am an h2 tag."),
    ]),
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am an h1 tag."),
      React.createElement("h2", {}, "I am an h2 tag."),
    ]),
  ]
);
//heading is an js object
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
//converts the js object heading into  h1 tag and puts inside root
root.render(parent);
//above code becomes very untidy and complex to write
//we can solve this by writing react in jsx

//render above convert js object to html and puts inside root div if already something exists in root div then it is replaced

//react is a library it can work independently on any component
//like above done on root or header
//it is just a js object written at low level
//framework gives everything
