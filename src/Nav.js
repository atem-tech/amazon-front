import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <div className="navbar">
      <Link to="/" className="nav__link">
        <div className="nav__option">
          <span className="menu__icon">
            <MenuIcon />
          </span>
          <span className="nav__optionLineTwo nav__menu">All</span>
        </div>
      </Link>
      <Link to="/" className="nav__link">
        <div className="nav__option">
          <p>Best Sellers</p>
        </div>
      </Link>
      <Link to="/" className="nav__link">
        <div className="nav__option">
          <p>Customer Service</p>
        </div>
      </Link>
      <Link to="/" className="nav__link">
        <div className="nav__option">
          <p>Prime</p>
        </div>
      </Link>
      <Link to="/" className="nav__link">
        <div className="nav__option">
          <p>New Releases</p>
        </div>
      </Link>
      <Link to="/" className="nav__link">
        <div className="nav__option">
          <p>Pharmacy</p>
        </div>
      </Link>
      <Link to="/" className="nav__link">
        <div className="nav__option">
          <p>Pharmacy</p>
        </div>
      </Link>
      <Link to="/" className="nav__link">
        <div className="nav__option">
          <p>Books</p>
        </div>
      </Link>
      <Link to="/" className="nav__link">
        <div className="nav__option">
          <p>Fashion</p>
        </div>
      </Link>
      <Link to="/" className="nav__link">
        <div className="nav__option">
          <p>Toys&Games</p>
        </div>
      </Link>
      <Link to="/" className="nav__link">
        <div className="nav__option">
          <p>Shop low prices for school</p>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
