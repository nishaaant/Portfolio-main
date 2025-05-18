import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div id='about' className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Professional <b>Profile</b></h1>
          <p>
            Hi, I'm <b>Nishant Rajput</b>, a passionate Full Stack Developer from New Delhi, India. With a strong educational background in Computer Science and practical experience in the tech industry, I bring a unique blend of technical expertise and real-world problem-solving skills.<br/><br/>
            <b>Technical Expertise:</b><br/>
            - Master's in Computer Applications (Data Science) from Gautam Buddha University<br/>
            - Bachelor's in Computer Applications from Guru Gobind Singh Indraprastha University<br/>
            - Specialized in MERN stack development with hands-on experience in React, Node.js, Express, and MongoDB<br/>
            - Proficient in Python, C++, and JavaScript for diverse development tasks<br/><br/>
            <b>Professional Journey:</b><br/>
            - Currently working as Full Stack Developer at Yup Solutions Pvt Ltd<br/>
            - Previously Software Developer Intern at CourPedia<br/>
            - Successfully delivered multiple high-impact projects with measurable improvements in performance and user engagement<br/><br/>
            <b>Core Strengths:</b><br/>
            - Building scalable and performant web applications<br/>
            - Implementing secure authentication and payment systems<br/>
            - Optimizing database performance and data integrity<br/>
            - Creating responsive and user-friendly interfaces<br/><br/>
            I'm actively seeking opportunities to collaborate on challenging projects and contribute to innovative solutions. My passion for technology and commitment to excellence drives me to continuously improve and deliver exceptional results.<br/><br/>
            Connect with me to explore how we can work together to bring your ideas to life!
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='MySQL' />
        <Skills skill='Typescript' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Python' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Postman'/>
        <Skills skill='Bootstrap'/>
        <Skills skill='Tailwind'/>
        
      </div>
    </>
  )
}

export default About