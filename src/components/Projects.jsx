import React from 'react';

// This is your data array. Add more objects here to add more project cards!
const projectData = [
  {
    id: "01",
    title: "Interactive 3D Portfolio",
    tags: ["React", "Three.js", "WebGL"],
    desc: "An immersive portfolio experience featuring interactive 3D elements and smooth animations."
  },
  {
    id: "02",
    title: "E-Commerce Platform",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    desc: "A full-stack e-commerce solution with real-time inventory and payment integration."
  },
  {
    id: "03",
    title: "Design System",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    desc: "A comprehensive design system with reusable components and documentation."
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      {/* This creates the purple glow behind your projects */}
      <div className="projects-bg-blur"></div>

      <div className="projects-container">
        <div className="projects-header">
          <h2>SELECTED PROJECTS</h2>
          <p>A showcase of my recent work and experiments</p>
        </div>

        <div className="projects-grid">
          {/* We "map" through the projectData array to create cards automatically */}
          {projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <div className="project-number">{project.id}</div>
              </div>
              
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                  ))}
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">
                  {project.desc}
                </p>
                
                <a href="#" className="project-link">
                  View Project <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;