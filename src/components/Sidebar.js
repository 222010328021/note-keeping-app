import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <Link to="/notes">Notes</Link>
      <Link to="/labels">Labels</Link>
      <Link to="/archive">Archive</Link>
      <Link to="/trash">Trash</Link>
    </div>
  );
};

export default Sidebar;
