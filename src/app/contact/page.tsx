export default function Contact() {
  return (
    <div style={{ backgroundColor: '#6bbab9', minHeight: 'calc(100vh - 70px)', flex: 1, paddingBottom: '40px' }}>
      <div className="contact-container">
        <h1 className="contact-title">
          <i className="fa-solid fa-envelope"></i>
          Contact Me
        </h1>
        
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-item">
              <p className="info-label">Name</p>
              <p className="info-value">Kuldeep Silu</p>
            </div>
            
            <div className="info-item">
              <p className="info-label">Location</p>
              <p className="info-value">Hanumangarh, Rajasthan, India</p>
            </div>
            
            <div className="info-item">
              <p className="info-label">Email</p>
              <p className="info-value"><a href="mailto:kuldeepsilu7@gmail.com" style={{ color: '#0050ff', textDecoration: 'none' }}>kuldeepsilu7@gmail.com</a></p>
            </div>
            
            <div className="info-item">
              <p className="info-label">Phone</p>
              <p className="info-value">+91 7300302661</p>
            </div>
            
            <div className="info-item">
              <p className="info-label">Message</p>
              <p className="info-value">Feel free to contact me for collaboration, projects or any opportunities. I am always open to learning new technologies and working on interesting web development projects.</p>
            </div>
            
            <div className="info-item">
              <p className="info-label">Social Links</p>
              <div className="social-links">
                <a href="https://github.com/kuldeepsilu17" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/kuldeep-silu-0b056539b" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" title="Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/kuldeepsilu_17" title="Instagram" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form">
            <form id="contactForm">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" placeholder="Message Subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
