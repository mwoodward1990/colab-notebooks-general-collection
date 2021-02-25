import React from "react";
//utility
import { Link } from "./../util/router";
//components
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SolarSystemNav from "./SolarSystemNav";
//bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./HeroSection.scss";
// icons
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiPython } from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';
//animations
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { pageVariants } from '../animations';
//Hooks
import { useWindowSize } from '../hooks/useWindowSize';

function HeroSection(props) {
  const { isMobile, isDesktop } = useWindowSize();
  // const fullHeight = { height:'100vh' };
  const iconStyles = {marginRight:'10px', marginLeft:'10px'};

  return (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
        // style={fullHeight}
      >
        <Container>
          <Row>
          <Col xs={12} md={12} lg={6}>
            <SolarSystemNav image={props.image} />
              <div style={{
                marginTop:'75px', 
                marginBottom:'18px',
                paddingLeft:'20px',
                }}>
                <Row>
                  <Fade delay={2600} cascade>
                    <h5>Technologies</h5>
                  </Fade>
                </Row>
                <Row>
                  <Fade delay={3000}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <SiJavascript size="25px" style={iconStyles}/>
                    </motion.div>
                  </Fade>
                  <Fade delay={3400}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaReact size="25px" style={iconStyles}/>
                    </motion.div>
                  </Fade>
                  <Fade delay={3800}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <SiPython size="25px" style={iconStyles}/>
                    </motion.div>
                  </Fade>
                  <Fade delay={4200}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <DiSqllite size="35px" style={iconStyles}/>
                    </motion.div>
                  </Fade>
                </Row>
              </div>
            </Col>
            {/* //style making the glass background style */}
            <Col sm={12} md={12} lg={6} fluid="true" style={{
              backgroundColor:"rgba(255, 255, 255, 0.3", 
              backdropFilter: "blur(2px)", 
              border: "rgba(255, 255, 255, 0.4) 1px solid", 
              padding:"48px", 
              boxShadow:"2px 10px 10px rgba(0, 0, 0, 0.4)"
              }}
            >
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                size={1}
                spaced={true}
              />
              {isDesktop && 
                <Bounce top delay={4800}>
                  <Link to='/contact'>
                    <Button 
                      className="hero-btn"
                      variant={props.buttonColor}
                      size="lg"
                    >
                      {props.buttonText}
                    </Button>
                  </Link>
                </Bounce>
              }
              {isMobile && // no animations for mobile
                <Link to='/contact'>
                  <Button 
                    className="hero-btn"
                    variant={props.buttonColor}
                    size="lg"
                  >
                    {props.buttonText}
                  </Button>
                </Link>
              }
            </Col>
          </Row>
        </Container>
      </Section>
    </motion.div>
  );
}

export default HeroSection;
