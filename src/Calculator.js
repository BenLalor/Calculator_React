import React, { useState } from "react";
import { evaluate } from "mathjs";

import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  const updateString = (newElement) => {
    if (newElement === "clear") return setDisplay("");
    else if (newElement === "=") calculate();
    else {
      setDisplay(display + newElement);
    }
  };

  const calculate = () => {
    const result = evaluate(display);
    setDisplay(result);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="rowOne">
          <button
            className="button"
            id="seven"
            onClick={() => updateString("7")}
          >
            7
          </button>
          <button
            className="button"
            id="eight"
            onClick={() => updateString("8")}
          >
            8
          </button>
          <button
            className="button"
            id="nine"
            onClick={() => updateString("9")}
          >
            9
          </button>
          <button className="button" id="add" onClick={() => updateString("+")}>
            +
          </button>
        </div>
        <div className="rowTwo">
          <button
            className="button"
            id="four"
            onClick={() => updateString("4")}
          >
            4
          </button>
          <button
            className="button"
            id="five"
            onClick={() => updateString("5")}
          >
            5
          </button>
          <button className="button" id="six" onClick={() => updateString("6")}>
            6
          </button>
          <button
            className="button"
            id="subtract"
            onClick={() => updateString("-")}
          >
            -
          </button>
        </div>
        <div className="rowThree">
          <button className="button" id="one" onClick={() => updateString("1")}>
            1
          </button>
          <button className="button" id="two" onClick={() => updateString("2")}>
            2
          </button>
          <button
            className="button"
            id="three"
            onClick={() => updateString("3")}
          >
            3
          </button>

          <button
            className="button"
            id="multiply"
            onClick={() => updateString("*")}
          >
            *
          </button>
        </div>
        <div className="rowFour">
          <button
            className="button"
            id="zero"
            onClick={() => updateString("0")}
          >
            0
          </button>
          <button
            className="button"
            id="clear"
            onClick={() => updateString("clear")}
          >
            clear
          </button>
          <button
            className="button"
            id="equals"
            onClick={() => updateString("=")}
          >
            =
          </button>
          <button
            className="button"
            id="divide"
            onClick={() => updateString("/")}
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
