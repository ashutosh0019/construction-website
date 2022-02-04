import React from 'react';
import { Card, CardColumns } from "react-bootstrap";
import "./Cards.css";
const Cards=(props)=> {
  return <>               
    {/* <div className="col-md-4 col-10 mx-auto"> */}
    
        <Card className='card-container col-md-2 mx-2' style={{ width: '36rem' }}>
          <Card.Img className='image-container' variant="top" src={props.imgsrc} />
          <Card.Body className='card-content'>
            <Card.Title className='image-title'>{props.title}</Card.Title>
            <Card.Text className='card-text'>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>    
   
    {/* </div> */}
  </>;
}
export default  Cards;
