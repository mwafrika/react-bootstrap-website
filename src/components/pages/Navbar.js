import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="nav-container container">
        <Link to="/" className="navbar-logo">
          <MdFingerprint className="navbar-icon" />
          LAVISH
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
          <ul className={click ? "nav-menu active" : "nav-menu"}></ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
