import React from 'react';
import Particles from "react-tsparticles";
import ProjectTab from '../project-tab/Project-tab';

import "./Project.css";
const Projects=()=> {
  
  return <div>
      <section class="overview-wrapper about-overview">
        <div class="container-custom">
          <h2 class="wrapper-heading head-color">Project</h2>
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 ">
              
            </div>
          </div>
          <ProjectTab/>
        </div>
      </section>
      
  </div>;
}

export default Projects;
