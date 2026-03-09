import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="outer-box"></div>
      <div className="main-container">
        <div className="inner-box">
          <img
            src="/image/project-manager.jpeg"
            alt="Project Manager Image"
            className="round-immage"
          />
          <h2 className="username">KULDEEP</h2>
          <div className="line"></div>
          <p className="Profession">PROJECT MANAGER</p>
          <div className="icon-bar">
            <a href="https://github.com/kuldeepsilu17" title="GitHub" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" title="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/in/kuldeep-silu-0b056539b" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/kuldeepsilu_17" title="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="right-container">
          <h1>Hello</h1>
          <h3>I'm Kuldeep, a passionate BCA student with an interest in software development and web technologies.</h3>
          <div className="button-group">
            <Link href="/resume" className="btn-resume">RESUME</Link>
            <Link href="/project" className="btn-projects">PROJECTS</Link>
          </div>
          <p className="description">
            I have basic knowledge of Java, PHP, HTML and programming concepts.
            I like building small projects and continuously learning new skills in the IT field.
          </p>
        </div>
      </div>
      <div style={{ height: "30px" }}></div>
    </>
  );
}
