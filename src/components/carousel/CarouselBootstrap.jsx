import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Carousel.css";

const CarouselBootstrap = () => {
  return (
      <>
        <Carousel fade>
        <Carousel.Item>
            <img
              className="d-block w-100"
              
              src={require('../Image/banner1.png')}
              alt="First slide"
            />
            <Carousel.Caption className='caption-content'>
              <h3>S&S CONSTRUCTION</h3>
              <p>ARCHITECT & CIVIL ENGINEER'S SERVICES</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              
              src={require('../Image/banner2.png')}
              alt="First slide"
            />
            <Carousel.Caption className='caption-content'>
              <h3>ALL TYPE OF CONSTRUCTION WORK</h3>
              <p>HOME BUILDER, MATERIAL AND LABOUR CONTRACT, STRUCTURAL DESIGN</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              
              src={require('../Image/banner4.png')}
              alt="First slide"
            />
            <Carousel.Caption className='caption-content'>
              <h3>INTERIOR AND EXTERIOR DESIGN</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../Image/banner3.png')}
              alt="Third slide"
            />

            <Carousel.Caption className='caption-content'>
              <h3>2D 3D PLAN DESIGN</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
  );
};
export default CarouselBootstrap;
