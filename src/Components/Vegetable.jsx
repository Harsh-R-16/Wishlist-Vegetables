import React from "react";
import Veg from "./Veg";

export default function Vegetable() {
  return (
    <div id="veg">
      <h1>Vegetable Component</h1>
      <Veg value={10} price={55}>
        <span>Tomatoes</span>
      </Veg>
      <Veg value={8} price={30}>
        <span>Potatoes</span>
      </Veg>
      <Veg value={5} price={40}>
        <span>Carrets</span>
      </Veg>
      <Veg value={7} price={100}>
        <span>Onions</span>
      </Veg>
    </div>
  );
}
