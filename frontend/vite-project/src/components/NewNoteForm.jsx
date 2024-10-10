import React, { useState } from 'react';

const NewNoteForm = ({ addNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteTitle && noteContent) {
      addNote({ title: noteTitle, content: noteContent });
      setNoteTitle('');
      setNoteContent('');
    }
  };

  return (
    <form className="new-note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Area of Focus"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <textarea
        placeholder="Affirmation"
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
      />
      <button type="submit"> Affirm </button>
    </form>
  );
};

export default NewNoteForm;
