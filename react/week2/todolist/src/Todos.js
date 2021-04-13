import { useState } from "react";

const initialTodos = [
  {
    id: 1,
    description: "Get out of bed",
    checked: false,
  },
  {
    id: 2,
    description: "Brush teeth",
    checked: false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    checked: true,
  },
];

function Todo({ description, checked, onCheck, onDelete }) {
  return (
    <div>
      <h3 style={{ textDecoration: checked ? "line-through" : "none" }}>
        {description}
      </h3>
      <input type="checkbox" checked={checked} onChange={onCheck} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

function Todos() {
  const [todos, setTodos] = useState(initialTodos);

  function checkTodo(id) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        } else {
          return todo;
        }
      });
    });
  }

  function addTodo() {
    setTodos((prevTodos) => {
      const defaultTodo = {
        id: prevTodos.length + 1,
        description: "Random text",
        checked: false,
      };

      return [...prevTodos, defaultTodo];
      // return prevTodos.concat(defaultTodo)
    });
  }

  function deleteTodo(id) {
    const nextTodos = todos.filter((todo) => todo.id !== id);

    setTodos(nextTodos);
  }

  return (
    <div>
      {todos.length
        ? todos.map((todo) => (
            <Todo
              key={todo.id}
              description={todo.description}
              checked={todo.checked}
              onCheck={() => checkTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))
        : "Nothing todo"}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default Todos;
