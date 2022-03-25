import React, { useState } from 'react';
import Button from './Button';

const NoteListItem = ({ note, onRemoveNote, onItemUpdate }) => {
  const { name: noteName, description: noteDescription, id } = note;

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(noteName);
  const [description, setDescription] = useState(noteDescription);

  const onEditButtonClick = () => {
    if (isEditing) {
      const updatedNote = { ...note, name, description };
      onItemUpdate(updatedNote);
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
          <span className="note-name">{name}</span>
        )}
        {isEditing ? (
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        ) : (
          <span className="note-desc">{description}</span>
        )}
      </div>
      <div className="btn-container">
        <Button onClick={onEditButtonClick}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        {!isEditing && <Button onClick={() => onRemoveNote(id)}>Delete</Button>}
      </div>
    </div>
  );
};



export default NoteListItem;