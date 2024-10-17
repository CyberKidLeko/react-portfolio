import { useState, useEffect } from 'react';
import './index.css';

import emailLogo from './assets/icons8-gmail-48.png';
import portfolioImg from './assets/portfolio.jpg';
import paintImg from './assets/paint.jpg';
import tutoringAppImg from './assets/tutoringApp.jpeg';
import heartsImg from './assets/hearts.jpeg'

function Portfolio() {
  const [visibleSection, setVisibleSection] = useState('about');

  const showSection = (sectionId) => {
    setVisibleSection(sectionId);
  };

  useEffect(() => {
    // Show the 'about' section by default when the component loads
    showSection('about');
  }, []);

  return (
    <div>
      {/* Banner */}
      <div id="banner">
        <div id="profile-info">
          <img src="src/assets/me.jpg" alt="image of me" className="profile-image" />
          <div id="name">
            <h1>N.G Ngwenya</h1>
            <h2>FullStack Developer</h2>
          </div>
        </div>
      </div>

      {/* Nav bar for smaller screens */}
      <div id="top-nav" className="top-navigation">
        <button onClick={() => showSection('about')}>About</button>
        <button onClick={() => showSection('skills')}>Skills</button>
        <button onClick={() => showSection('projects')}>Projects</button>
        <button onClick={() => showSection('education')}>Education</button>
        <button onClick={() => showSection('contact')}>Contact</button>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Sidebar */}
        <div className="sidebar">
          <button onClick={() => showSection('about')}>About</button>
          <button onClick={() => showSection('skills')}>Skills</button>
          <button onClick={() => showSection('projects')}>Projects</button>
          <button onClick={() => showSection('education')}>Education</button>
          <button onClick={() => showSection('contact')}>Contact</button>
        </div>

        {/* Main Content Area */}
        <div className="main-content">
          {/* About Section */}
          {visibleSection === 'about' && (
            <div id="about">
              <h2>About</h2>
              <p>
                Hey there! I’m Gift, your friendly neighborhood tech enthusiast and a third-year IT student at North-West
                University. With a major in Computer Information Technology, I’m on a quest to conquer the world of Full
                Stack development, one line of code at a time! 🎉 I’m expected to graduate in 2026, and I’m excited to
                turn my passion into a thriving career.
              </p>
              <p>
                My journey in tech is fueled by curiosity and creativity. I’ve dabbled in a variety of programming
                languages, including Java, C++, C#, JavaScript, and HTML5. I thrive in development environments like
                Microsoft Visual Studio and Oracle SQL Developer, where I get to transform ideas into robust software
                solutions.
              </p>
              <h3>Full Stack Developer Extraordinaire</h3>
              <p>
                What really gets me pumped is Full Stack development! I love crafting seamless web experiences, utilizing
                a blend of front-end and back-end technologies. Whether it’s whipping up dynamic user interfaces with
                JavaScript and CSS or architecting powerful back-end systems with ASP.NET, I’m all about building
                applications that are not only functional but also fun to use.
              </p>
              <p>
                One of my proudest projects is the Tutoring App and Management System, where I designed a sleek database
                architecture to track student and tutor information effortlessly. I took on the challenge of ensuring
                efficient data collection and retrieval, all while keeping the user experience at the forefront. Who said
                coding can’t be exciting?
              </p>
            </div>
          )}

          {/* Skills Section */}
          {visibleSection === 'skills' && (
            <div id="skills">
              <h3>Skills That Shine</h3>
              <div className="skills-container">
                <div className="skill-item">
                  <div className="skill-label">HTML</div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '80%', backgroundColor: 'green' }}>80%</div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-label">CSS</div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '73%', backgroundColor: 'yellow' }}>73%</div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-label">JavaScript</div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '55%', backgroundColor: 'blue' }}>55%</div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-label">Python</div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '55%', backgroundColor: 'aqua' }}>55%</div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-label">Java</div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '75%', backgroundColor: 'darkblue' }}>75%</div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-label">SQL</div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '65%', backgroundColor: 'gray' }}>65%</div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-label">ASP.NET</div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '70%', backgroundColor: 'darkmagenta' }}>70%</div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-label">.NET(WinForms)</div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '75%', backgroundColor: 'magenta' }}>75%</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Section */}
          {visibleSection === 'projects' && (
            <div id="projects">
              <h3>Projects</h3>
              <div className="projectSpace">
                <a href="https://github.com/CyberKidLeko/ng_ngwenya" className="project-button">
                  <img src={portfolioImg} alt="Project 1" className="project-image" />
                  <div className="project-text">This Website!(HTML, CSS, JS)</div>
                </a>

                <a href="https://github.com/CyberKidLeko/DasmotoArtsAndCafts" className="project-button">
                  <img src={paintImg} alt="Dasmoto's Arts and Crafts" className="project-image" />
                  <div className="project-text">Dasmoto Arts and Crafts!</div>
                </a>

                <a href="https://github.com/CyberKidLeko/TutoringApp2" className="project-button">
                  <img src={tutoringAppImg} alt="Tutoring App" className="project-image" />
                  <div className="project-text">Tutoring App</div>
                </a>

                
                <a href="https://github.com/CyberKidLeko/Go_out_with_me_please" className="project-button">
                    <img src={heartsImg} alt="go out with me project" className="project-image" />
                    <div className="project-text">Date?</div>
                </a>
                <a href="https://github.com/CyberKidLeko/ng_ngwenya" className="project-button">
                  <img src={portfolioImg} alt="Project 1" className="project-image" />
                  <div className="project-text">This Website!(In React)</div>
                </a>
              </div>
            </div>
          )}
           {visibleSection === 'contact' && (
    <div id="contact">
      <h3>Connect with Me</h3>
      <div className="social-links">
        <a href="https://github.com/CyberKidLeko" target="_blank" rel="noopener noreferrer">
          <img src='./src/assets/github-mark.png' alt="GitHub" />
        </a>
        <a href="www.linkedin.com/in/ngwenya-nomsa" target="_blank" rel="noopener noreferrer">
          <img src='./src/assets/github-mark.png' alt="LinkedIn" />
        </a>
        <a href="mailto:nkululekongwenya123@gmail.com">
          <img src={emailLogo} alt="Email" />
        </a>
      </div>
    </div>
  )}

          {/* Education Section */}
          {visibleSection === 'education' && (
            <div id="education">
              <h3>Education</h3>
              <h4>Northwest University</h4>
              <p><strong>Bachelor Degree</strong></p>
              <p><strong>January 2022 - Present</strong></p>
              <ul>
                <li>Major: Computer Programming, SQL</li>
                
              </ul>

              <h4>Codecademy</h4>
              <p><strong>Certificate</strong></p>
              <p><strong>January 2024</strong></p>
              <ul>
                <li>Area of Study: Full-Stack Engineer</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
