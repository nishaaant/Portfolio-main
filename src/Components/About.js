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
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Nishant Rajput</b> and I am from New Delhi, India.<br/><br/>
            I did my <b>Bachelors</b> in <b>Computer Applications</b> where i learned about various technologies like Computer Graphics, Advanced Computer Networks, Mobile Computing. <br/>
            Got into the field of Web Development and got familiar with HTML, CSS, and JavaScript. <br/><br/>
            I am currently a final year college student pursuing<br/> <b>Masters</b> in <b>Computer Applications</b> Major. in <b>Data Science</b>. <br/>
            Here i am getting familiar with various Database technologies and learning about advance technologies required for the industry<br/><br/>
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do photography, socialising, and interact with people with different views.
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