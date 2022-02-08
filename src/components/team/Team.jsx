import React from 'react';
import { Card } from "react-bootstrap";
import "./Team.css";
import Saurabh from "./image/saurabh.png";
import Pritam from "./image/pritam.png";
export default function Team() {
  return <>
        {/* <section> */}
            {/* <div className="row">
                <div className="col-sm-12">
                    <h2 className="wrapper-heading head-color">Who We Are</h2>
                </div>
            </div> */}
           
            <div className="container-custom b-wrap">
                <div className="row">
                    <div className="col-sm-12 col-md-6  senior-loadmore-display">
                        <div className="bod-inner">
                            <Card style={{ width: '28rem',display: 'block', border:"none" }}>
                                <Card.Img  variant="top" src={Saurabh} />
                                <Card.Body className='bod-info s-info text-left' style={{background:"", color:"#000", fontSize:"20px"}}>
                                    <Card.Title style={{fontSize:"15px"}}>Er. Saurabh Sundu</Card.Title>
                                                                        
                                    <Card.Text style={{lineHeight: "100%"}}>B.Tech(Civil) <br /><span style={{letterSpacing:"1px", fontSize:"15px", }}>Founder & CEO</span></Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6  senior-loadmore-display">
                        <div className="bod-inner">
                            <Card style={{ width: '28rem',display: 'block', border:"none" }}>
                                <Card.Img  variant="top" src={Pritam} />
                                <Card.Body className='bod-info s-info text-left' style={{background:"", color:"#000", fontSize:"20px"}}>
                                    <Card.Title style={{fontSize:"15px"}}>Er. Pritam Singh</Card.Title>
                                                                        
                                    <Card.Text style={{lineHeight: "100%"}}>M.Tech(Civil) <br /><span style={{letterSpacing:"1px", fontSize:"15px", }}>Founder, Managing Director</span></Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>   
                     
        {/* </section> */}

  </>;
}
