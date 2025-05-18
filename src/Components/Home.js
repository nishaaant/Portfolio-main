import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
// import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div id='home'>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>NISHANT RAJPUT</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>Introduction</b></h1>
          <p>
          A <b>Full Stack Developer</b> with a proven track record of building scalable web applications using the <b>MERN stack</b>. I specialize in creating responsive, user-friendly interfaces with React.js and developing robust backend systems with Node.js and Express.js. My expertise extends to database management with MongoDB and MySQL, ensuring optimal data handling and performance.<br/><br/>
          With hands-on experience at Yup Solutions Pvt Ltd and CourPedia, I've successfully led the development of several high-impact projects, including:<br/>
          - A scheduling platform with OAuth authentication and Stripe integration<br/>
          - A social networking application with real-time features<br/>
          - A challenge management system with advanced data integrity<br/>
          - An e-commerce platform with optimized order processing<br/><br/>
          Currently pursuing a Master's in Computer Applications with a focus on Data Science, I'm constantly expanding my skillset in AI/ML and advanced database technologies. I'm passionate about combining technical excellence with innovative solutions to drive business growth.<br/><br/>
          Let's collaborate to turn your ideas into reality! 🚀
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home