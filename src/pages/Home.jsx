import "../style/home.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home">
      <div className="hero" style={{
        height: "730px"
      }}>
        <h1>Hey There, I'm</h1>
        <span className="name">AKULA</span>

        <p>Currently Studying Computer Science and Engineering</p>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
     </div>
        {/* <Link to="/about">
          <button>Get In Touch</button>
        </Link> */}
         {/* ABOUT SECTION */}
      <section className="about-preview">
        <h3>About</h3>
        <p>
          Hi there! I'm Akula, a Computer Science student at the University of Hyderabad with a passion for
          building user-friendly and modern web applications using React and CSS.I specialize in creating 
          responsive and interactive web applications that provide seamless user experiences. With a strong 
          foundation in frontend development, I am dedicated to crafting visually appealing and functional websites 
          that meet the needs of users and businesses alike.beyond coding, I am an avid learner and enjoy exploring 
          new technologies and design trends to stay at the forefront of the ever-evolving web development landscape.
         Let's connect and create something amazing together!
        </p>

        <Link to="/about">
          <button className="more-btn"> More</button>
        </Link>
      </section>
      
      
      {/* CONTACT PREVIEW */}
      <section className="contact-preview">
        <h3>Get In Touch</h3>
        <p>Let's work together or discuss your next project.</p>
        <Link to="/contact">
          <button>Contact Me</button>
        </Link>
      </section>
    
    </div>
  );
}
