import React from 'react';
import './App.css';
import Router from './routes/Router';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <section>
      <Navigation />
      <Router/>
      <Footer />
    </section>
  );
}

export default App;

