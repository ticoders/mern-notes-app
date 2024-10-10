import React, { useState } from 'react';

function NewNoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      title,
      content,
    });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="new-note-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NewNoteForm;
