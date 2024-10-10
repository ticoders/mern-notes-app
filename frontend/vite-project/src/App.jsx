import React, { useState } from 'react';
import NoteList from './components/noteList';
import NewNoteForm from './components/NewNoteForm';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <NewNoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
