import React from 'react';
import Button from './Button';

const CreateNote = ({
  name,
  description,
  onNameChange,
  onDescriptionChange,
  onCreate,
}) => (

  <div className="create-container">
          <input
      onChange={(event) => onNameChange('name', event.target.value)}
      className="name-btn"
      value={name}
      placeholder="Name"
    />
    <input
      onChange={(event) =>
        onDescriptionChange('description', event.target.value)
      }
      className="description-input"
      value={description}
      placeholder="Description"
    />
 
    <Button className="create-btn" onClick={onCreate}>Save</Button>
    </div>

);


export default CreateNote;