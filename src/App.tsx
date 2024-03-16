import './App.css'
import React from 'react';
import Register from './Register';

const App: React.FC = () => {

    const handleRegister = (firstname: string, lastname: string, email: string, password: string, confirmpassword: string) => {
    console.log('Registerd with:', { firstname, lastname, email, password, confirmpassword });
  };

  return (
    <div className="container">
      <Register onRegister={handleRegister}/>
    </div>
  );
};

export default App;