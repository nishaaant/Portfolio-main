import React from 'react';
import ProjectBox from './ProjectBox';
import FoodiesImage from '../images/FoodiesImage.png';
import DphiImage from '../images/DphiImage.png';
import PortfolioImage from '../images/PortfolioImg.png';
import Dockssimage from '../images/Dockssimage.png'
import YaaraanaImage from '../images/YaaraanaImage.png'
import Scheduler from '../images/Scheduler.png'
import ImageDashboard from '../images/ImageDashboard.png'


const Projects = () => {
  return (
    <div id='project'>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={DphiImage} projectName="Dphi" />
        <ProjectBox projectPhoto={YaaraanaImage} projectName="Yaaraana" />
        <ProjectBox projectPhoto={FoodiesImage} projectName="FoodiesPoint" />
        <ProjectBox projectPhoto={Scheduler} projectName="Scheduler" />
        <ProjectBox projectPhoto={PortfolioImage} projectName="Portfolio" />
        <ProjectBox projectPhoto={ImageDashboard} projectName="ImageDashboard" />
        <ProjectBox projectPhoto={Dockssimage} projectName="Dockss" />
      </div>

    </div>
  )
}

export default Projects