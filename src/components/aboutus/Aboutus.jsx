import React from 'react';
import Team from '../team/Team';
import "./Aboutus.css";
const Aboutus=()=> {
  return <>
      <section class="overview-wrapper about-overview">
      
        <div class="container-custom">
          
          <h2 class="wrapper-heading head-color" style={{textAlign:"center"}}>About Us</h2>
          
          <div class="row" style={{marginTop:"30px"}}>
            <div class="col-lg-6 col-md-12 col-sm-12 ">
                <div className="team">
                    <Team/>
                </div>
              </div>
            <div class="col-lg-6 col-md-12 col-sm-12 ">
              <div class="para-scroll-wrapper" id="style-3" >
                <p class="overview-copy">S&S construction is one of the fastest-growing companies in Bihar. 
                We have expertise in executing Modern Home, Complex Design.</p>
                <p class="overview-copy pt--20">We provide ready-to-deploy solutions for Interior Design, Exterior Design
                 &amp; 2D and 3D Plan Design &amp; Structural Design, 
                and Material and Labour Contract &amp; Detail Estimation and Billing 
                 &amp; Site Inspection &amp; Renovation Work</p>
                <p class="overview-copy pt--20">We deliver projects on time using top-class management 
                techniques and do not compromise on safety and sustainability.</p>
                
                
              </div>
            </div>
           
          </div>
        </div>
        
      </section>
      
  </>;
}

export default Aboutus;
