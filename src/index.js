// import animals from "./data";

// console.log(animals);

// const [cat, dog] = animals;

// console.log(cat);

// // const {name: catName, sound: catSound} = cat;

// const { name = "Fluffy", sound = "Purr" } = cat;

// console.log(sound);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [model, coloursByPopularity, speedStats] = cars;
console.log(speedStats);

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
