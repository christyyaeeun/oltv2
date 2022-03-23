import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemoveTodo, onItemUpdate }) => {
  return (
    <div className="todo-container">
            {todos.length > 0 ? (
        todos.map((todo, index) => (
          <TodoListItem
            key={todo.id ? todo.id : index}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onItemUpdate={onItemUpdate}
          />
        ))
      ) : (
        <p>No todos available!</p>
      )}
    </div>
  );
};


export default TodoList;