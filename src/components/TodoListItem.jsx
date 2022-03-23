import React, { useState } from 'react';
import Button from './Button';

const TodoListItem = ({ todo, onRemoveTodo, onItemUpdate }) => {
  const { name: todoName, description: todoDescription, id } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(todoName);
  const [description, setDescription] = useState(todoDescription);

  const onEditButtonClick = () => {
    if (isEditing) {
      const updatedTodo = { ...todo, name, description };
      onItemUpdate(updatedTodo);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="card">
      <div className="card">
        {isEditing ? (
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        ) : (
          <span className="todo-name">{name}</span>
        )}
        {isEditing ? (
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        ) : (
          <span className="todo-desc">{description}</span>
        )}
      </div>
      <div className="btn-container">
        <Button onClick={onEditButtonClick}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        {!isEditing && <Button onClick={() => onRemoveTodo(id)}>Delete</Button>}
      </div>
    </div>
  );
};



export default TodoListItem;