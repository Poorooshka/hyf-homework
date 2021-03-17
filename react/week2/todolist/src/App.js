import react from "react";
import { useState, useEffect } from "react";
import Todos from "./Todos";
import "./App.css";

function App() {
  let [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="App">
      <h2>You have used {time} seconds on this website</h2>
      <Todos />
    </div>
  );
}

export default App;
