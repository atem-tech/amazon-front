import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer__rapper">
      <div className="link__rapper">
        <span> Get to Know Us</span>
        <Link>Careers</Link>
        <Link>Blog</Link>
        <Link>Careers</Link>
        <Link>Blog</Link>
        <Link>Careers</Link>
        <Link>Blog</Link>
      </div>
      <div>
        <span> Get to Know Us</span>
        <Link>Blog</Link>
        <Link>Careers</Link>
        <Link>Blog</Link>
        <Link>Careers</Link>
        <Link>Blog</Link>
      </div>
    </div>
  );
}

export default Footer;
