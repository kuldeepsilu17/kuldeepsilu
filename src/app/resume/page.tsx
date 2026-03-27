export default function Resume() {
  return (
    <div style={{ minHeight: 'calc(100vh - 70px)', paddingBottom: '40px', flex: 1 }}>
      <div className="resume-container">
        <div className="resume-section">
          <i className="fa-solid fa-square"></i>
          <h1 className="resume">Resume</h1>
        </div>
        
        {/* Experience Section */}
        <div className="resume-section-wrapper">
          <h2 className="resume-section-title">
            <i className="fa-solid fa-briefcase"></i>
            Experience
          </h2>
          <div className="resume-grid">
            <div className="resume-card">
              <div className="resume-card-container resume-card-content">
                <h3 className="resume-card-title">Full Stack Web Development Trainee</h3>
                <p className="resume-card-company">Ducat – Gurgaon</p>
                <p className="resume-card-date">2024 - Present</p>
                <p className="resume-card-description">Learning Full Stack Web Development including HTML, CSS, JavaScript and Python. Building responsive websites and working on practical projects during training.</p>
              </div>
            </div>
            <div className="resume-card">
              <div className="resume-card-container resume-card-content">
                <h3 className="resume-card-title">Web Development Projects</h3>
                <p className="resume-card-company">Personal / Academic Projects</p>
                <p className="resume-card-date">2024 – Present</p>
                <p className="resume-card-description">Developed several beginner web projects such as Portfolio Website, To-Do List App and Student Management System to practice frontend and backend development skills.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="resume-section-wrapper">
          <h2 className="resume-section-title">
            <i className="fa-solid fa-graduation-cap"></i>
            Education
          </h2>
          <div className="resume-grid">
            <div className="resume-card">
              <div className="resume-card-container resume-card-content">
                <h3 className="resume-card-title">Bachelor of Computer Applications (BCA)</h3>
                <p className="resume-card-company">Government Nehru Memorial College <br />
                  Affiliated to Maharaja Ganga Singh University</p>
                <p className="resume-card-date">2024 - Present</p>
                <p className="resume-card-description">Currently pursuing BCA with focus on programming, web development, database management, and operating systems. Developing practical skills in HTML, CSS, JavaScript and basic software development.</p>
              </div>
            </div>
            <div className="resume-card">
              <div className="resume-card-container resume-card-content">
                <h3 className="resume-card-title">Diploma / Certification</h3>
                <p className="resume-card-company">Full Stack Web Development, Python & AI Training <br />
                  Ducat - Gurgaon</p>
                <p className="resume-card-date">2025 - 2026</p>
                <p className="resume-card-description">Currently pursuing professional training in Full Stack Web Development along with Python programming and Artificial Intelligence basics. Learning technologies like HTML, CSS, JavaScript, Python and building practical web projects.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Skills Section */}
        <div className="resume-section-wrapper">
          <h2 className="resume-section-title">
            <i className="fa-solid fa-star"></i>
            Professional Skills
          </h2>
          <div className="resume-grid">
            <div className="resume-card">
              <div className="resume-card-container resume-card-content">
                <div className="skills-grid">
                  {/* Left Column: Frontend & Tools */}
                  <div>
                    <div className="skill-card">
                      <p className="skill-card-title">Frontend Development</p>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Responsive Web Design</li>
                        <li>Bootstrap</li>
                      </ul>
                    </div>
                    <div className="skill-card" style={{ marginTop: '15px' }}>
                      <p className="skill-card-title">Tools & Technologies</p>
                      <ul>
                        <li>Git & GitHub</li>
                        <li>VS Code</li>
                        <li>MySQL / Database Basics</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Right Column: Backend & Other Skills */}
                  <div>
                    <div className="skill-card">
                      <p className="skill-card-title">Backend Development</p>
                      <ul>
                        <li>Python</li>
                        <li>Basic API Development</li>
                      </ul>
                    </div>
                    <div className="skill-card" style={{ marginTop: '15px' }}>
                      <p className="skill-card-title">Other Skills</p>
                      <ul>
                        <li>Problem Solving</li>
                        <li>Basic Artificial Intelligence Concepts</li>
                      </ul>
                    </div>
                    <div className="skill-card" style={{ marginTop: '15px' }}>
                      <p className="skill-card-title">Languages</p>
                      <ul>
                        <li>Hindi (Native)</li>
                        <li>English (Intermediate)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
