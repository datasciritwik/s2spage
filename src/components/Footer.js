import React from 'react';
import './Footer.css';
// import { CiMenuBurger } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";

function Footer() {
  return (
    <div className="footer">
      <div className="call-button">📞</div>
      <div className="menu-button"><CgMenuGridR /></div>
    </div>
  );
}

export default Footer;
