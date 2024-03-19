import './App.css'
import React from 'react';
import Home from './components/Home'
import ReviewCard from './components/ReviewCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {

  return (
    <div className="container">
      <Home/>
      <ReviewCard/>
    </div>
  );
};

export default App;