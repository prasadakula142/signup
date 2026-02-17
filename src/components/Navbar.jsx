import { Link } from "react-router-dom";
import "../style/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo"></h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
