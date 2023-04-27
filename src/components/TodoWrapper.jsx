import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { Quote } from './Quote';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        else return todo;
      })
    );
  };

  const editTodoStart = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, isEditing: true };
        else return todo;
      })
    );
  };

  const editTodoEnd = (id, newTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, task: newTodo, isEditing: false };
        else return todo;
      })
    );
  };

  const dummyProp = null;

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoWrapper">
      <h1>The Never-ending To Do List</h1>
      <Quote />
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        if (todo.isEditing)
          return (
            <EditTodoForm key={todo.id} todo={todo} editTodoEnd={editTodoEnd} />
          );
        else
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              editTodoStart={editTodoStart}
              deleteTodo={deleteTodo}
            />
          );
      })}
    </div>
  );
};
