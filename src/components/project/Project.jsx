import React from 'react';
import ProjectTab from '../project-tab/Project-tab';
import WorkingStyle from '../working-style/WorkingStyle';

import "./Project.css";
const Projects=()=> {
  
  return <div>
      
        
          <WorkingStyle/>
          <h2 className='wrapper-heading head-color'>Our Projects</h2>

          <ProjectTab/>
        
      
      
  </div>;
}

export default Projects;
