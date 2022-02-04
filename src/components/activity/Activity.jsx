import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import { ActivityData } from './ActivityData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Activity.css";
const Activity = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if(!Array.isArray(slides) || slides.length <= 0){
    return null
  }

  return (
    <section className='activity-section'>
      <h2 className="wrapper-heading head-color">Our Activity</h2>
      <div className="slider">
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        {ActivityData.map((slide,index)=>{
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (<img src={slide.image} alt="activity image" className='image' />)}
                
            </div>
          )
            
          
        })}
      </div>
    </section>
  )
}

export default Activity;