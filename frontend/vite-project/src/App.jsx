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
      <p><strong>Welcome! </strong>I applaud you for choosing to feed your self care. Add your affirmations to the page by clicking affirm.</p>
      <NewNoteForm addNote={addNote} />
      <NoteList notes={notes} />
      <p className="signature">
        Made by {' '}
        <a
          href="https://www.linkedin.com/in/darimaidiong/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#4CAF50' }} // Style the link color
        >
          Tea idiong
        </a>
      </p>
    </div>
  );
}

export default App;

