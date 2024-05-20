import React from 'react';
import './NotesScreen.css';

const messages = [
  { type: 'user', text: 'Hello, how can I help you today?' },
  { type: 'ai', text: 'I am here to assist you with your queries.' },
  { type: 'user', text: 'Can you tell me about React?React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.' },
  { type: 'ai', text: 'React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.React is a JavaScript library for building user interfaces.' },
];

function NotesScreen() {
  return (
    <div className="notes-screen">
      {messages.map((message, index) => (
        <div key={index} className={`note ${message.type}`}>
          {message.type === 'user' ? (
            <>
              <div className="user-icon">👤</div>
              <div className="note-content">{message.text}</div>
            </>
          ) : (
            <>
              <div className="note-content">{message.text}</div>
              <div className="ai-icon">🤖</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default NotesScreen;
