import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    FoodiesPointDesc : "This is an Online Food Delivery platform designed to provide a seamless and efficient way for users to browse menus and place orders.",
    FoodiesPointGithub : "https://github.com/nishaaant/Foodies-Point",
    FoodiesPointWebsite : "https://foodies-point.vercel.app/",

    PortfolioDesc : "The goal of this project is to provide a professional and engaging platform to highlight my work and connect with potential collaborators or employers.",
    PortfolioGithub : "https://github.com/nishaaant/Portfolio-main",
    PortfolioWebsite : "https://nishaaant.vercel.app/",

    NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    NewsletterGithub:"",
    NewsletterWebsite:"",

    DphiDesc:"Engineered a robust system allowing users to create, edit, and delete challenges with ease, ensuring a seamless user experience and efficient challenge management. (CRUD)",
    DphiGithub:"https://github.com/nishaaant/DPHI",
    DphiWebsite:"https://dphi-nishants-projects-dfba7292.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox