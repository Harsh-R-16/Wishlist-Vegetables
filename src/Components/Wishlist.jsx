import { useState } from "react";

export default function Wishlist() {
  let [head, setHead] = useState("Wishlist Component");
  let [inp, setInp] = useState("");
  let [item, setItem] = useState([]);
  function inpHandler(e) {
    setInp(e.target.value);
  }
  function addHandler(e) {
    if (e.target.innerHTML === "Refresh") {
      setItem([]);
      return;
    }
    if (item.length > 3) {
      alert("You cannot add more than 3 items to wishlist.");
    }
    if (inp) {
      item.push(inp);
      setItem(item);
      setInp("");
      console.log(item);
    } else {
      setHead("Please Enter Something....");
      setTimeout(() => {
        setHead("Wishlist Component");
      }, 1000);
    }
  }
  return (
    <div id="wishlist">
      <h1>{head}</h1>
      <label htmlFor="inp"></label>
      {item.length <= 3 ? (
        <div>
          <input
            type="text"
            id="inp"
            onChange={(e) => inpHandler(e)}
            value={inp}
            placeholder="type your item"
          />
          <button onClick={(e) => addHandler(e)}>Add Item</button>
          <ul>
            {item.map((li, index) => (
              <li key={index}>{li}</li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <h2>You cannot add more than 3 items to wishlist</h2>
          <button onClick={(e) => addHandler(e)}>Refresh</button>
        </>
      )}
    </div>
  );
}
