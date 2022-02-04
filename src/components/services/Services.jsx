import React from 'react';
import Cards from '../card/Cards';
import Sdata from "../../Sdata";

const Services=()=> {
  return <>
      
          
            <div className="container-fluid">
              <div className="row">

                <div className="col-10 mx-auto ">
                <h2 className="wrapper-heading head-color">Our Services</h2>          

                  <div className="row gy-4 mr-3 pt-4">
                    {/* <Cards/> */}
                    {
                      Sdata.map((val, ind)=>{
                        return <Cards
                          key={ind}
                          imgsrc={val.imgsrc}
                          title={val.title}
                        />
                      })
                    }                                          
                  </div>
                </div>
              </div>
            </div>
       
       
  </>;
}

export default Services;
