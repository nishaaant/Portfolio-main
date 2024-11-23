import React from 'react';
import ProjectBox from './ProjectBox';
import FoodiesImage from '../images/FoodiesImage.png';
import DphiImage from '../images/DphiImage.png';
import PortfolioImage from '../images/PortfolioImg.png';


const Projects = () => {
  return (
    <div id='project'>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={PortfolioImage} projectName="Portfolio" />
        <ProjectBox projectPhoto={DphiImage} projectName="Dphi" />
        <ProjectBox projectPhoto={FoodiesImage} projectName="Foodiespoint" />
      </div>

    </div>
  )
}

export default Projects