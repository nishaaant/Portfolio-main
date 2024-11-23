import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
// import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Nishant Rajput</h4>
      <h4>Copyright &copy; 2023 NR</h4>
      <div className='footerLinks'>
        <a href="https://github.com/nishaaant" target='_blank'><FaGithub/></a>
        <a href="http://www.linkedin.com/in/nishant-rajput-3a1150212" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:rajput123n@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer