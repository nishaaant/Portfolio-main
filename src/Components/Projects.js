import React from 'react';
import ProjectBox from './ProjectBox';
import FoodiesImage from '../images/FoodiesImage.png';
import DphiImage from '../images/DphiImage.png';
import PortfolioImage from '../images/PortfolioImg.png';
import Dockssimage from '../images/Dockssimage.png'


const Projects = () => {
  return (
    <div id='project'>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={PortfolioImage} projectName="Portfolio" />
        <ProjectBox projectPhoto={DphiImage} projectName="Dphi" />
        <ProjectBox projectPhoto={FoodiesImage} projectName="FoodiesPoint" />
        <ProjectBox projectPhoto={Dockssimage} projectName="Dockss" />
      </div>

    </div>
  )
}

export default Projects