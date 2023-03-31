import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export const EditTodoForm = ({ todo, editTodoEnd }) => {
  const [value, setValue] = useState(todo.task);

  const ref = React.useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) editTodoEnd(todo.id, value);
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const cancelEdit = () => {
    editTodoEnd(todo.id, todo.task);
  };

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="edit-todo-input"
        value={value}
        placeholder="Edit task"
        onChange={handleChange}
        ref={ref}
      />
      <div>
        <button type="submit" className="edit-todo-btn">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <FontAwesomeIcon icon={faXmark} onClick={cancelEdit} />
      </div>
    </form>
  );
};
