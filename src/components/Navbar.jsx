import React from 'react';

const Navbar = () => {
  return (
    <header>
      <h1 className="logo">Bhaskar</h1>
      <nav>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PORTFOLIO</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <button className="btn-signing">SIGNIN</button>
    </header>
  );
};

export default Navbar;