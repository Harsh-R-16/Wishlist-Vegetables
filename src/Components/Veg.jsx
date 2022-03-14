import { useState } from "react";

export default function Veg({ children, value, price }) {
  let [val, setVal] = useState(value);
  console.log(value);
  function clc(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "+") setVal(val + 1);
    else if (val > 0) setVal(val - 1);
    else alert("No Negative Values!!!!!");
  }
  return (
    <div className="veg">
      <h2>
        {children}: {val}kg {"<->"} Total: {val * price}₹
      </h2>
      <div>
        <button onClick={(e) => clc(e)}>+</button>
        <button onClick={(e) => clc(e)}>-</button>
      </div>
    </div>
  );
}
