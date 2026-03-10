import Image from "next/image";

export default function Projects() {
  return (
    <div className="project-container" style={{ backgroundColor: '#6bbab9', minHeight: 'calc(100vh - 70px)', paddingBottom: '40px' }}>
      <div className="projects-section">
        <i className="fa-solid fa-square"></i>
        <h1 className="my-projects">Projects</h1>
      </div>

      <p className="discription-center">
        I am a BCA student with a strong interest in software development and web technologies. My projects demonstrate my practical knowledge of programming concepts and web development using technologies like HTML, CSS, and Java. Through these projects, I aim to enhance my technical skills and gain hands-on experience in building efficient and user-friendly applications.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-card-content">
            <h3>Student Management System</h3>
            <div className="role-title">Developer</div>
            <p>This project is a Student Management System designed to manage and organize student information efficiently. It allows users to add, update, delete, and view student records. The project demonstrates my understanding of programming logic, data management, and basic application development.</p>
          </div>
          <div className="project-card-image">
            <Image
              src="https://media.istockphoto.com/id/1403897395/photo/unrecognizable-friends-studying-together-in-the-library.jpg?s=612x612&w=0&k=20&c=aV37NDbgIbCDMPQft-2M4OTUmXBtL0N43YVxLDsUNig="
              alt="project image"
              width={600}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              unoptimized
            />
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <h3>Personal Portfolio Website</h3>
            <div className="role-title">Web Designer</div>
            <p>This project is a personal portfolio website developed to showcase my skills, projects, and contact information. It is built using HTML and CSS with a clean and responsive design. The website reflects my ability to create structured and user-friendly web pages.</p>
          </div>
          <div className="project-card-image">
            <Image
              src="https://images.unsplash.com/photo-1664748512003-8820b08d8161?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvJTIwd2Vic2l0ZSUyMGRlc2lnbiUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
              alt="project image"
              width={600}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              unoptimized
            />
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <h3>Simple Calculator Application</h3>
            <div className="role-title">Developer</div>
            <p>This project is a simple calculator application that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. It highlights my understanding of programming concepts, user input handling, and logical operations.</p>
          </div>
          <div className="project-card-image">
            <Image
              src="https://media.istockphoto.com/id/2239089166/photo/online-mortgage-rate-comparison-and-application-on-laptop.jpg?s=612x612&w=0&k=20&c=IodzQsPaxa2QGdHk-B-vvul_aV5K_T4Mmbdd0D7wdJQ="
              alt="project image"
              width={600}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
