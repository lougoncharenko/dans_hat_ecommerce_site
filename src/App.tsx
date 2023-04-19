import React from 'react';
import './App.css';
import Router from './routes/Router';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <section>
      <Navigation />
      <Router/>
    </section>
  );
}

export default App;

