import React, { useState } from 'react';
import NoteList from './components/noteList';
import NewNoteForm from './components/NewNoteForm';
import './index.css'; // Ensure the CSS file is imported

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
    
    // Play sound effect on note submission
    const audio = new Audio('/submit-sound.mp3'); // Adjust the path as needed
    audio.play();
  };

  return (
    <div className="App">
      <h1>Daily Affirmations</h1>
      <p>Write and Add your affirmations to the page.</p>
      <NewNoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;

