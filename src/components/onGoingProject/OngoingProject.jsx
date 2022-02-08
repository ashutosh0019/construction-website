import React from 'react';
import "./OngoingProject.css";
import { Card } from "react-bootstrap";
const  OngoingProject=(props)=> {

  return(
  <>
        <Card className='card-container mx-0 col-md-4' >
          <Card.Img className='image-container' variant="top" src={props.imgsrc} />
          <Card.Body className='card-content'>
            <Card.Title className='image-title'>{props.title}</Card.Title>
            
          </Card.Body>
        </Card>    
  </>
  );
}

export default OngoingProject;
