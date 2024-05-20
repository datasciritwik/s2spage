import React from 'react';
import './App.css';
import NotesScreen from './components/NotesScreen';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NotesScreen />
        <UserProfile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
