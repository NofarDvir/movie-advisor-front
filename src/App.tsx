import './App.css'
import React from 'react';
import Login from './login';

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Logged in with:', { email, password });
  };

  return (
    <div className="container">
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default App;