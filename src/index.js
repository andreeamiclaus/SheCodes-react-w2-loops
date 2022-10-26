import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import BalticCountries from "./BalticCountries"
import Countries from "./Countries"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let countries = [



{
  name:"France",
  capital:"Paris",
},
{
  name:"USA",
  capital:"DC",
},
{
  name:"Australia",
  capital:"Canberra",
},
{
  name:"Japan",
  capital:"Tokyo",
}


];
root.render(
  <StrictMode>
    <div className="App">
      <h1>React Loops</h1>

      <h3>Challenge 1</h3>
      <p>
        Create a new Component called BalticCountries and list the 3 baltic
        countries (Estonia, Latvia, Lithuania) without using loops or variables.
        Include the component below.

        <BalticCountries/>
      </p>

      <h3>Challenge 2</h3>
      <p>
        Include a component called Countries below and send the variable
        countries (created above) as a property. Create a new component called
        Countries and list all countries from the Countries component using a
        loop.

        <Countries countries= {countries} />
      </p>

      <h3>Challenge 3</h3>
      <p>
        Modify the countries variable in the code above so it includes the
        country name but also the capital city of each country. Display each
        country and capital city in the Countries component
      </p>
      <Countries countries= {countries} />
    </div>
  </StrictMode>
);
