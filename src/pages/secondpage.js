import React from 'react'
import NotesScreen from '../components/NotesScreen'
import UserProfile from '../components/UserProfile'
import Footer from '../components/Footer'
function secondpage() {
  return (
    <div>
      <div className="container">
        <NotesScreen />
        <UserProfile />
      </div>
      <Footer /> 
    </div>
  )
}

export default secondpage
