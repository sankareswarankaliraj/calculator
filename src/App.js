import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");

  const handleclick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backSpace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("evalution error");
    }
  };
  return (
    <div class="app">
      <h1>simple calculator</h1>
      <div class="container">
        <div class="calculator">
          <input type="text" placeholder="0" value={result} />
          <br />
          <button class="clear" onClick={clear}>
            cl
          </button>
          <button class="highlight" name="*" onClick={handleclick}>
            *
          </button>
          <button class="highlight" name="/" onClick={handleclick}>
            /
          </button>
          <button class="highlight" name="Bs" onClick={backSpace}>
            Bs
          </button>
          <br />
          <button class="numeric" name="1" onClick={handleclick}>
            1
          </button>
          <button name="2" onClick={handleclick}>
            2
          </button>
          <button name="3" onClick={handleclick}>
            3
          </button>
          <button class="highlight" name="-" onClick={handleclick}>
            -
          </button>
          <br />
          <button name="4" onClick={handleclick}>
            4
          </button>
          <button name="5" onClick={handleclick}>
            5
          </button>
          <button name="6" onClick={handleclick}>
            6
          </button>
          <button class="highlight" name="+" onClick={handleclick}>
            +
          </button>

          <br />
          <button name="7" onClick={handleclick}>
            7
          </button>
          <button name="8" onClick={handleclick}>
            8
          </button>
          <button name="9" onClick={handleclick}>
            9
          </button>
          <button class="highlight" name="=" onClick={calculate}>
            =
          </button>
          <br />
          <button class="zero" name="0" onClick={handleclick}>
            0
          </button>
        </div>
      </div>
      <h4>designed by sankareswarankaliraj</h4>
    </div>
  );
}
