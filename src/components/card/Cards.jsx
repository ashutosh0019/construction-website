import React from 'react';
import { Card } from "react-bootstrap";
import "./Cards.css";
const Cards=(props)=> {
  return <>               
    {/* <div className="col-md-4 col-10 mx-auto"> */}
    
        <Card className='card-container col-md-4 mx-0'>
          <Card.Img className='image-container' variant="top" src={props.imgsrc} />
          <Card.Body className='card-content'>
            <Card.Title className='image-title'>{props.title}</Card.Title>
          </Card.Body>
        </Card>    
   
    {/* </div> */}
  </>;
}
export default  Cards;
