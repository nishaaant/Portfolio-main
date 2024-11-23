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
          A passionate <b>MERN Stack Developer</b> with a knack for building <b>dynamic</b>, <b>scalable</b>, and <b>user-friendly</b> web applications. I specialize in crafting seamless front-end experiences using <b>React</b>, building robust back-end systems with <b>Node.js</b> and <b>Express</b>, and managing databases with <b>MongoDB</b>.<br/><br/>
          In addition to my expertise in the <b>MERN stack</b>, I have a strong foundation in programming languages like <b>C++</b>, <b>Python</b>, and <b>JavaScript</b>, enabling me to solve complex problems and adapt to diverse challenges. Whether it's developing APIs, creating elegant UIs, or optimizing performance, I strive to deliver impactful solutions that bridge functionality with creativity.
          Feel free to explore my projects, where I’ve combined technical skills with my passion for coding.<br/><br/>
          Let’s connect and turn <b>ideas into reality!</b> 🚀  
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