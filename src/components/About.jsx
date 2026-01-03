import React from 'react';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Side: Profile Card */}
        <div className="about-profile">
          <div className="profile-image-container">
            {/* REMOVED '/public' - Vite looks in public folder by default */}
            <img src="/myimg.jpg" alt="Bhaskar" className="profile-img" />
            <div className="status-badge">☕</div>
          </div>
          <h2 className="profile-name">Bhaskar</h2>
          <p className="profile-role">Creative Developer</p>
          <p className="profile-org">Building Digital Experiences</p>
          
          <div className="social-icons">
            {/* Twitter / X */}
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/x.png" alt="X" />
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
            </a>
            {/* GitHub */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" />
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="about-details">
          <h2 className="section-title">About Me</h2>
          <p className="bio-text">
            I am a developer who loves blending art with technology. My work focuses on 
            creating interactive, immersive web experiences using modern tools like 
            React and Spline. I believe code is a canvas for innovation.
          </p>
          
          {/* REMOVED '/public' from path */}
          <a href="/cv.pdf" className="btn-download" download>
            <span>⬇</span> Download CV
          </a>

          <div className="info-grid">
            <div className="info-column">
              <h3>Interests</h3>
              <ul>
                <li>• 3D Web Design</li>
                <li>• Interactive UI/UX</li>
                <li>• Generative Art</li>
                <li>• Creative Coding</li>
              </ul>
            </div>
            <div className="info-column">
              <h3>Education</h3>
              <div className="edu-item">
                <p className="edu-degree">🎓 Bachelor of Technology</p>
                <p className="edu-meta">Siliguri Institute of Technology | 2027</p>
              </div>
              <div className="edu-item">
                <p className="edu-degree">🎓 Certification in JAVA Development</p>
                <p className="edu-meta">Udemy | 2026</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;