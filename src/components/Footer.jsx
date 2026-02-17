import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo */}
        <h2 className="footer-logo">AKULA</h2>

       

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="copyright">
          © {new Date().getFullYear()} Rahul. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
