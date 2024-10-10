import React from 'react';

const NoteList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <div className="note" key={index}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
