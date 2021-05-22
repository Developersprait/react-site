import React from 'react';
import './sass/main.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div >
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
