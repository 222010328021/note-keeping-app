import React, { useEffect, useState } from 'react';
import { getNotes } from '../services/noteService';

const NotesList = ({ userId }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const notesSnapshot = await getNotes(userId);
      setNotes(notesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchNotes();
  }, [userId]);

  return (
    <div>
      {notes.map(note => (
        <div key={note.id} style={{ backgroundColor: note.backgroundColor }}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <p>Tags: {note.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
