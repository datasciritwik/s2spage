import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Secondpage from './pages/secondpage';
import NotesScreen from './components/NotesScreen';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Homepage from './pages/homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Second" element={<Secondpage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
