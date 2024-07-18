import React, { useState } from 'react';
import { addNote } from '../services/noteService';

const NoteForm = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleAddNote = async () => {
    const note = {
      userId,
      title,
      content,
      tags,
      backgroundColor,
      archived: false,
      trashed: false,
      createdAt: new Date(),
    };
    await addNote(note);
    setTitle('');
    setContent('');
    setTags([]);
    setBackgroundColor('#ffffff');
  };

  return (
    <div style={{ backgroundColor }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <input
        type="text"
        value={tags.join(', ')}
        onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
        placeholder="Tags (comma separated)"
      />
      <input
        type="color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default NoteForm;
