export default function Contact() {
  return (
    <div style={{ minHeight: 'calc(100vh - 70px)', flex: 1, paddingBottom: '40px' }}>
      <div className="contact-container">
        <h1 className="contact-title">
          <i className="fa-solid fa-envelope"></i>
          Contact Me
        </h1>
        
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-item">
              <p className="info-label"><i className="fa-solid fa-user" style={{marginRight: '8px'}}></i> Name</p>
              <p className="info-value">Kuldeep Silu</p>
            </div>
            
            <div className="info-item">
              <p className="info-label"><i className="fa-solid fa-location-dot" style={{marginRight: '8px'}}></i> Location</p>
              <p className="info-value">Hanumangarh, Rajasthan, India</p>
            </div>
            
            <div className="info-item">
              <p className="info-label"><i className="fa-solid fa-envelope" style={{marginRight: '8px'}}></i> Email</p>
              <p className="info-value"><a href="mailto:kuldeepsilu7@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>kuldeepsilu7@gmail.com</a></p>
            </div>
            
            <div className="info-item">
              <p className="info-label"><i className="fa-solid fa-phone" style={{marginRight: '8px'}}></i> Phone</p>
              <p className="info-value">+91 7300302661</p>
            </div>
            
            <div className="info-item">
              <p className="info-label"><i className="fa-solid fa-message" style={{marginRight: '8px'}}></i> Message</p>
              <p className="info-value">Feel free to contact me for collaboration, projects or any opportunities. I am always open to learning new technologies and working on interesting web development projects.</p>
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
