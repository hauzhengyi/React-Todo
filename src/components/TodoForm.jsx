import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) addTodo(value);
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Add new task"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
