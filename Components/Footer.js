import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <div className='footer flex items-center justify-center'>
      <h4>Developed by Akilandeshwari Srinivasan</h4>
      <h4>Copyright &copy; 2024 AS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Akila-19" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/akilandeshwari-srinivasan" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:akilavasan1981998@gmail.com' target='_blank'><GrMail/></a>
      </div>
      </div>
    </>
  )
}

export default Footer