import React from 'react';
import NoteListItem from './NoteListItem';

const NoteList = ({ notes, onRemoveNote, onItemUpdate }) => {
  return (
    <div className="note-container">
            {notes.length > 0 ? (
        notes.map((note, index) => (
          <NoteListItem
            key={note.id ? note.id : index}
            note={note}
            onRemoveNote={onRemoveNote}
            onItemUpdate={onItemUpdate}
          />
        ))
      ) : (
        <p>No notes available!</p>
      )}
    </div>
  );
};


export default NoteList;