import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    FoodiesPointDesc : "This is an Online Food Delivery platform designed to provide a seamless and efficient way for users to browse menus and place orders.",
    FoodiesPointGithub : "https://github.com/nishaaant/Foodies-Point",
    FoodiesPointWebsite : "https://drive.google.com/file/d/131wtBD7KTvrz9UnpGax6TM1iyUl0vJHv/view?usp=sharing",

    PortfolioDesc : "The goal of this project is to provide a professional and engaging platform to highlight my work and connect with potential collaborators or employers.",
    PortfolioGithub : "https://github.com/nishaaant/Portfolio-main",
    PortfolioWebsite : "https://nishaaant.vercel.app/",

    NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    NewsletterGithub:"",
    NewsletterWebsite:"",

    DphiDesc:"Engineered a robust system allowing users to create, edit, and delete challenges with ease, ensuring a seamless user experience and efficient challenge management. (CRUD)",
    DphiGithub:"https://github.com/nishaaant/DPHI",
    DphiWebsite:"https://dphi-nishants-projects-dfba7292.vercel.app/",

    DockssDesc:"A sleek document-saving app powered by Vite for speed and Framer Motion for smooth, animated card interactions. Effortless, organized, and visually stunning!",
    DockssGithub:"https://github.com/nishaaant/dockss",
    DockssWebsite:"https://dockss.vercel.app/",
    
    YaaraanaDesc:"Built a MERN stack application with features like account creation, profile editing, connection management, and secure login/logout workflows.",
    YaaraanaGithub:"https://github.com/nishaaant/Yaaraana-Web",
    YaaraanaWebsite:"https://drive.google.com/file/d/1PFM4-dGjk319dnFngrTnSmXJQ4OmcSKP/view?usp=sharing",
    
    SchedulerDesc:"Developed a MERN stack application enabling users to design and execute email marketing sequences through an intuitive flowchart-based interface using React Flow.",
    SchedulerGithub:"https://github.com/nishaaant/Scheduler-Nish-Web",
    SchedulerWebsite:"https://drive.google.com/file/d/1RUXw2EkmsLLMs64HYj3eLvNQ6iDt1bs1/view?usp=sharing",

    ImageDashboardDesc:"Built a responsive admin dashboard to manage user-submitted names, social handles, and images. Developed with React.js, Tailwind CSS, and MongoDB, featuring dynamic data display and seamless navigation.",
    ImageDashboardGithub:"https://github.com/nishaaant/user-image-dashboard",
    ImageDashboardWebsite:"https://nishand-image-dashboard.vercel.app/",

    TaskManagerDesc:"A full-stack task management app with real-time stats, task creation, editing, and priority tracking. Built with React, TypeScript, Tailwind CSS, and Node.js. 🚀",
    TaskManagerGithub:"https://github.com/nishaaant/TaskManager-Nish",
    TaskManagerWebsite:"https://task-manager-nish.vercel.app/",
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