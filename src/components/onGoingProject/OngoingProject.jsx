import React from 'react';
import "./OngoingProject.css";
import { Card } from "react-bootstrap";
import Lalganj1 from "./image/lalganj1.jpg";
const  OngoingProject=(props)=> {

  return(
  <>
        <Card className='card-container col-md-2 mx-2' style={{ width: '36rem' }}>
          <Card.Img className='image-container' variant="top" src={props.imgsrc} />
          <Card.Body className='card-content'>
            <Card.Title className='image-title'>{props.title}</Card.Title>
            
          </Card.Body>
        </Card>    
  </>
  );
}

export default OngoingProject;
