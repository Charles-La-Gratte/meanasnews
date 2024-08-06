import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <Link to="/About">About</Link>
          <Link to="/Features">Features</Link>
          <Link to="/Authentication">Dashboard</Link>
          <Link to="/Pricing">Pricing</Link>
          <Link to="/HelpCenter">MeanAs Help Center</Link>
        </nav>
        <p>&copy; 2024 MeanAs.com. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
