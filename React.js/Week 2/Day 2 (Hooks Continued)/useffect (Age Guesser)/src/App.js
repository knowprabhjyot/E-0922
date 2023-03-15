import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [typedValue, setTypedValue] = useState("");
  let [response, setResponse] = useState({});

  useEffect(() => {
    if (typedValue.length > 3) {
      fetch(`https://api.agify.io/?name=${typedValue}`)
        .then((res) => {
          return res.json();
        })
        .then((finalData) => {
          setResponse(finalData);
        });
    }
  }, [typedValue]);

  const changeInputValue = (event) => {
    setTypedValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="nameContainer">
        {/* Conditional Operator */}

        {typedValue.length > 3 ? (
          <div>
            <h1>Name: {response.name}</h1>
            <h2>Age Guessed: {response.age}</h2>
          </div>
        ) : null}
      </div>
      <div className="inputContainer">
        <input
          value={typedValue}
          onChange={changeInputValue}
          placeholder="Type something"
        />
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;
