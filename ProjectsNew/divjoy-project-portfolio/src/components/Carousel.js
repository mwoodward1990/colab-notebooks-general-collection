import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Col,
  Row
} from 'reactstrap';
import { GoMarkGithub } from 'react-icons/go';
import { MdOpenInNew } from 'react-icons/md';

import { Button } from "reactstrap";

import "./Carousel.scss";

const MyCarousel = ({ 
  items, 
  activeIndex, 
  setAnimating, 
  next, 
  previous, 
  goToIndex 
}) => {
  const glassStyle = {
    backgroundColor:"rgba(255, 255, 255, 0.3", 
    backdropFilter: "blur(2px)", 
    border: "rgba(255, 255, 255, 0.4) 1px solid", 
    padding:"36px", 
    boxShadow:"2px 10px 10px rgba(0, 0, 0, 0.4)",
    margin:"20px 0 20px 0",
  };

  const slides = items.map((item) => {
    
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.index}
      >
        <div>
          <center>
            <a href={item.link} target="blank">
              <img 
                src={item.img} 
                alt={item.alt} 
                style={{maxHeight:'400px', boxShadow:'4px 10px 10px gray'}}
              />
            </a>
          </center>
        </div>
        <Row className="projects-icons-container" style={{
          margin:"36px 10px 40px 10px", 
          justifyContent:"center", 
          }}>
            { item.github && 
              <a className="projects-icons" style={{margin:"0 5px 0 5px"}}href={item.github} target="blank">
                <GoMarkGithub size="24px" color="#000" />
              </a> 
            }
            { item.link && 
              <a className="projects-icons" style={{margin:"0 5px 0 5px"}} href={item.link} target="blank">
                <MdOpenInNew size="24px" color="#000" />
              </a> 
            }
        </Row>
        <Row style={glassStyle}>
          <Col>   
            <h3>Brief description</h3>
            <p>{item.description}</p>
          </Col>
          <Col>
            <h3>Additional details</h3>
            <p>{item.status ? item.status : "No additional details at the moment.."}</p>
          </Col>
        </Row>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      keyboard={true}
    >
      <div style={{margin:"0 10px 30px 10px"}}>
        <div style={{marginBottom:"15px"}}>
          <span>{activeIndex + 1} of {items.length}</span>
        </div>
        <Button className="hero-btn" variant="" color="primary" onClick={previous}>Previous</Button>
        <Button className="hero-btn" variant="" color="primary" onClick={next}>Next</Button>
      </div>
      {slides}
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
    </Carousel>
  );
}

export default MyCarousel;