// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{display:'flex'}}>
      <div>
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
