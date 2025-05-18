import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const education = [
    {
      title: "Master's in Computer Applications (Data Science)",
      institution: "Gautam Buddha University, Greater Noida",
      period: "July 2023 - July 2025",
      grade: "8.5",
      description: "Currently pursuing Master's in Computer Applications with specialization in Data Science. Learning advanced database technologies and industry-relevant technologies."
    },
    {
      title: "Bachelor's in Computer Applications",
      institution: "Guru Gobind Singh Indraprastha University, Delhi",
      period: "2020 - 2023",
      grade: "8.75",
      description: "Completed Bachelor's in Computer Applications with a strong foundation in computer science and web development."
    }
  ];

  const workExperience = [
    {
      title: "Full Stack Developer",
      institution: "Yup Solutions Pvt Ltd",
      period: "Jan 2025 - Present",
      description: "• Designed and implemented scalable RESTful APIs with Express.js, enhancing backend performance and data integrity.\n• Debugged and optimized full-stack solutions, improving system stability and user experience."
    },
    {
      title: "Software Developer Intern",
      institution: "CourPedia",
      period: "Jun 2024 - Dec 2024",
      description: "• Built and optimized full-stack web solutions using the MERN stack, improving platform performance by 20%.\n• Developed secure REST APIs and responsive UIs with React.js and Tailwind CSS, enhancing user engagement by 15%."
    }
  ];

  return (
    <div id="experience" className="experience-section">
      <div className="section-container">
        <div className="section">
          <h2 className="section-title">Education</h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="timeline-container"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <h3 className="experience-title">{edu.title}</h3>
                  <p className="institution">{edu.institution}</p>
                  <p className="period">{edu.period}</p>
                  <p className="grade">Grade: {edu.grade}</p>
                  <div className="description">
                    {edu.description.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="section">
          <h2 className="section-title">Work Experience</h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="timeline-container"
          >
            {workExperience.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="institution">{exp.institution}</p>
                  <p className="period">{exp.period}</p>
                  <div className="description">
                    {exp.description.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;