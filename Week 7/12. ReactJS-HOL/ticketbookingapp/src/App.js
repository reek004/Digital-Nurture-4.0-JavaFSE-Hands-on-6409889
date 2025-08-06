import React, { useState } from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Greeting from './components/Greeting';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Ticket Booking App</h1>
          <div className="auth-section">
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn ? (
              <LogoutButton onClick={handleLogoutClick} />
            ) : (
              <LoginButton onClick={handleLoginClick} />
            )}
          </div>
        </div>
      </header>
      
      <main className="App-main">
        {isLoggedIn ? <UserPage /> : <GuestPage />}
      </main>
    </div>
  );
}

export default App;
