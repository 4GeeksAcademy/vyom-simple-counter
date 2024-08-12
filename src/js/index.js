//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let count = 0;

const root = ReactDOM.createRoot(document.getElementById("app"));

function counter() {
  count++;
  let str = count.toString();
  // console.log(count);
  root.render(<Home str={str} />);
}

setInterval(counter, 1000);

//render your react application
