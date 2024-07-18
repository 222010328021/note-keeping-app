import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './services/firebaseConfig';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import NotesPage from './pages/NotesPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/notes" element={user ? <NotesPage userId={user.uid} /> : <LoginPage />} />
          {/* Add routes for LabelView, ArchivePage, TrashPage */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
