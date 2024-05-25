import React from 'react'
import "./homepage.css";
import { CgMenuGridR } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
function homepage() {
  return (
    <>
      <div className='hcontainer'>
      <div className='hcontent'>
        <div className='hicon'>
        <FaUser />
        </div>
        <div className='heading'> User Profile</div>
        </div>
        <div className='hfooter'>
        <div className="call-button">
            
            <IoIosCall />
            
        </div>
      <div className="menu-button"><CgMenuGridR /></div>
        </div>
      </div>
    </>
  )
}

export default homepage
