import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    axios
      .get<TodoItem[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div className="App">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;