import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{},"Hello World From Core React")
// console.log("heading")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// const heading = <h1>Hello world from jsx</h1>
// const root1 = ReactDOM.createRoot(document.getElementById("root"))
// root1.render(heading)

//React Functional Component using older way
const Description = function () {
    return <h2>Componenct2 dd</h2>;
  };

const ele=<>
<span>Element 1</span>
<h2>element 2</h2>
</>

//React Element
const title=<h1>React Element
    <Description/>   //Component inside element  
    {ele}  //Element inside element
</h1>
//React Functional Component using newer way, Arrow functions
const Heading = () => {
  return (
    <>
      <h1>hello World from functional component</h1>
      <Description /> //Component Composition => Calling an component inside
      another component.
      {title}   //React Element inside Component
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />); //Rendering component

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(title)   //Rendering react element