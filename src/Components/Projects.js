import React from 'react';
import ProjectBox from './ProjectBox';
import FoodiesImage from '../images/FoodiesImage.png';
import DphiImage from '../images/DphiImage.png';
import PortfolioImage from '../images/PortfolioImg.png';
import Dockssimage from '../images/Dockssimage.png'
import YaaraanaImage from '../images/YaaraanaImage.png'
import Scheduler from '../images/Scheduler.png'
import ImageDashboard from '../images/ImageDashboard.png'
import TaskImage from '../images/TaskImage.png'
import CalendarSchedularImage from '../images/CalendarSchedulerImage.png'
import EventNish from '../images/EventNish.png'
import InteractiveMap from '../images/InteractiveMap.png'


const Projects = () => {
  return (
    <div id='project'>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={DphiImage} projectName="Dphi" />
        <ProjectBox projectPhoto={YaaraanaImage} projectName="Yaaraana" />
        <ProjectBox projectPhoto={FoodiesImage} projectName="FoodiesPoint" />
        <ProjectBox projectPhoto={CalendarSchedularImage} projectName="CalendarScheduler" />
        <ProjectBox projectPhoto={TaskImage} projectName="TaskManager" />
        <ProjectBox projectPhoto={InteractiveMap} projectName="InteractiveMap" />
        <ProjectBox projectPhoto={Scheduler} projectName="EmailScheduler" />
        <ProjectBox projectPhoto={EventNish} projectName="EventNish" />
        <ProjectBox projectPhoto={ImageDashboard} projectName="ImageDashboard" />
        <ProjectBox projectPhoto={Dockssimage} projectName="Dockss" />
        <ProjectBox projectPhoto={PortfolioImage} projectName="Portfolio" />
      </div>

    </div>
  )
}

export default Projects