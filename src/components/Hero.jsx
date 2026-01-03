import React, { useState, Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="hero-section" id="home">
      <div className="content">
        <div className="tag-box">
          <div className="tag">VIEW PROJECTS ⫽</div>
        </div>
        
        <h1>Hey I'm <br />Bhaskar</h1>
        
        <p className="description">
          I build web experiences that blend creativity, technology, and a bit of
          experimentation. When I’m not coding, I’m sketching and exploring new ideas.
        </p>

        <div className="buttons">
          <a href="/cv.pdf" className="btn-get-started" download>
            Download CV &gt;
          </a>
          <a href="#" className="btn-signing-main">Get Started</a>
        </div>
      </div>

      <div className="spline-wrapper">
        {/* 1. Show this only while Spline is loading */}
        {isLoading && (
          <div className="spline-loader">
            <div className="spinner"></div>
            <p>Loading 3D Experience...</p>
          </div>
        )}

        {/* 2. The Spline component with the onLoad trigger */}
        <Spline 
          scene="https://prod.spline.design/ewz4Kc0sfd8XALYl/scene.splinecode" 
          onLoad={() => setIsLoading(false)} 
        />
      </div>
    </section>
  );
};

export default Hero;