import React from 'react';
import './UserProfile.css';

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="profile-item">
        <div className="profile-icon">👤</div>
        <p>Speaking</p>
      </div>
      <div className="profile-item">
        <div className="profile-icon">🤖</div>
        <p>Listening</p>
      </div>
    </div>
  );
}

export default UserProfile;
