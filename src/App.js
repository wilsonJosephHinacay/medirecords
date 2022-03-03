import React, { useMemo, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import _ from "lodash";

const App = () => {
  //init state
  const [input, setInput] = useState("");
  const [inputArray, setInputArray] = useState([]);
  const [output, setOutput] = useState([]);

  //functions below
  const validDigits = (n) => {
    let result = n.replace(/[^\d,]+/g, "");
    let stringArray = _.split(result, ",");
    let numberArray = []; //init
    // iterate
    stringArray.forEach((str) => {
      // validate empty
      if (!_.isEmpty(str)) {
        numberArray.push(Number(str));
      }
    });
    //end
    setInput(result); //set input string
    setInputArray(numberArray); // set array of numbers
  };

  useMemo(() => {
    const output = inputArray.map((str) => {
      return str * 2;
    });
    setOutput(output);
  }, [inputArray]);

  return (
    <div className="App">
      <div className="App-header">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 px-10 py-10">
              <h2 className="font-bold">Input</h2>
              <InputField
                id="input"
                htmlFor={`form-input`}
                label="Array"
                name="input"
                onChange={(e) => {
                  validDigits(e.target?.value);
                }}
                value={input}
                type="text"
                placeholder={"e.g 1,2,3,4,5"}
              />
            </div>
            {/*  */}
            <div className="border-2 px-10 py-10">
              <h2 className="font-bold">Output</h2>
              <InputField
                id="output"
                htmlFor={`form-output`}
                label="Double"
                name="output"
                value={_.toString(output)}
                readOnly
                type="text"
                placeholder={"e.g 2,3,4,5,6"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
