import { useState, useEffect } from "react";

const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function Todo({ todo, onCheck, onDelete, updateDescription, updateDeadline }) {
  const [isEditing, setIsEditing] = useState(false);

  const { description, checked, deadline, id } = todo;

  function onDescriptionChange(event) {
    const value = event.target.value;
    updateDescription(id, value);
  }

  function onDeadlineChange(event) {
    const value = event.target.value;
    updateDeadline(id, value);
  }

  return (
    <div>
      <div style={{ textDecoration: checked ? "line-through" : "none" }}>
        {isEditing ? (
          <input
            type="text"
            value={description}
            onChange={onDescriptionChange}
          />
        ) : (
          <h3>{description}</h3>
        )}
        {isEditing ? (
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={deadline}
            onChange={onDeadlineChange}
          />
        ) : (
          <h4>{deadline}</h4>
        )}
      </div>
      <input type="checkbox" checked={checked} onChange={onCheck} />
      <button onClick={onDelete}>Delete</button>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Update" : "Edit"}
      </button>
    </div>
  );
}

function AddTodoForm({ addTodo }) {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    addTodo(description, deadline);

    setDescription("");
    setDeadline("");
  }

  const onDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const onDeadlineChange = (event) => {
    const value = event.target.value;
    setDeadline(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={onDescriptionChange}
        />
      </div>
      <div>
        <label htmlFor="deadline"></label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          value={deadline}
          onChange={onDeadlineChange}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

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

  function addTodo(description, deadline) {
    setTodos((prevTodos) => {
      const newTodo = {
        id: prevTodos.length + 1,
        description,
        deadline,
        checked: false,
      };

      return [...prevTodos, newTodo];
    });
  }

  function deleteTodo(id) {
    const nextTodos = todos.filter((todo) => todo.id !== id);

    setTodos(nextTodos);
  }

  function updateDescription(id, description) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            description,
          };
        } else {
          return todo;
        }
      })
    );
  }

  function updateDeadline(id, deadline) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            deadline,
          };
        } else {
          return todo;
        }
      })
    );
  }

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      {todos.length
        ? todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onCheck={() => checkTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
              updateDescription={updateDescription}
              updateDeadline={updateDeadline}
            />
          ))
        : "Nothing todo"}
    </div>
  );
}

export default Todos;
