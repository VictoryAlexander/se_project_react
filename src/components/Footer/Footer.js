import React from "react";
import './Footer.css';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">Developed by Victor Alexander</p>
      <p className="footer__production-year">{date}</p>
    </footer>
  )
}

export default Footer;