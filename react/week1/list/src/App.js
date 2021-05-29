import React from "react";
import "./App.css";

const toDos = [
  "Get out of bed, Wed Sep 13 2017",
  "Brush teeth, Thu Sep 14 2017",
  "Eat breakfast, Fri Sep 15 2017",
];
function ToDoList(props) {
  return (
    <div>
      {
        <ul>
          {toDos.map((toDo) => (
            <li key={toDo}>{toDo}</li>
          ))}
        </ul>
      }
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
