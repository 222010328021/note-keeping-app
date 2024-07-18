import React from 'react';
import NoteForm from '../components/NoteForm';
import NotesList from '../components/NotesList';

const NotesPage = ({ userId }) => {
  return (
    <div>
      <NoteForm userId={userId} />
      <NotesList userId={userId} />
    </div>
  );
};

export default NotesPage;
