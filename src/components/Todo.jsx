import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ todo, toggleComplete, deleteTodo, editTodoStart }) => {
  return (
    <div className="Todo" onClick={() => toggleComplete(todo.id)}>
      <p className={todo.completed ? 'completed' : ''}>{todo.task}</p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={(e) => {
            e.stopPropagation();
            editTodoStart(todo.id);
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo(todo.id);
          }}
        />
      </div>
    </div>
  );
};
