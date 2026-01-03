import React from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="app-root">
      <Cursor />
      {/* Background stays at the root level */}
      <img className="image-gradient" src="/public/backgroundwebp.webp" alt="gradient" />
      <div className="layer-blur"></div>

      <div className="container">
        <Navbar />
        <Hero />
      </div>
      <Projects />
      <About />
    </div>
  );
}

export default App;