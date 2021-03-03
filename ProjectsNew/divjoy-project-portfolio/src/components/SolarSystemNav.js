import React from 'react';
//bootstrap
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
// icons
import { 
  FaShopify, 
  FaWordpress,
  FaCode,
  FaHatWizard,
  FaIcons,
  FaLaptopCode,
  FaReact,
  FaRocket,
  FaSalesforce
} from 'react-icons/fa';
import { SiJavascript, SiPython } from 'react-icons/si';
import { IoMdApps } from 'react-icons/io';
import { DiSqllite } from 'react-icons/di';
//animations
import { motion } from 'framer-motion';
import { Planet } from 'react-planet';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
//Hooks
import { useWindowSize } from '../hooks/useWindowSize';
import { useRouter } from "../util/router";

const SolarSystemNav = (props) => {
  const router = useRouter();
  const { isMobile, isDesktop } = useWindowSize();

  const imageStyle = { boxShadow:'4px 10px 10px gray', backgroundColor:'rgba(255,255,255,0.2', backdropFilter:'blur(16px)' }
  const planetStyle = { 
    boxShadow:'4px 10px 10px gray', 
    borderRadius:'50px', 
    height:'64px', 
    width:'64px',
    marginRight:'16px',
    marginBottom: '16px'
  };
  function handleClick(e, endpoint) {
    e.preventDefault();
    const slicedArr = endpoint.split("/");
    if ( slicedArr[1] === "project" ) {
      router.push({
        pathname: "/project/" + slicedArr[2]
      });
    }
    else if ( slicedArr[1] === "projects" ) {
      router.push({
        pathname: "/projects/" + slicedArr[2]
      });
    }
  }


  return (
      <div style={{paddingBottom:'250px'}}>
      {isDesktop &&
        <Planet
          centerContent={
            <div style={{width:'200px',height:'200px'}}>
              <Fade
                duration={5000}
              >
                <figure className="HeroSection__image-container mx-auto">
                  <Image src={props.image} fluid={true} style={imageStyle}/>
                </figure>
              </Fade>
            </div>
          }
          open
          orbitRadius={210}
          rotation={190} // I can use this to tether to the window size and as the window size is adjusted the characteristics of the solar system nav will change orbiting around my picture as my picture also centers when screen size gets smaller
          hideOrbit
          >

          <Rotate topLeft delay={4600}>
            <Planet
              centerContent={
                  <motion.div onHoverStart={{ scale: 1.1 }}>
                    <IoMdApps size="42px" style={planetStyle} onClick={(e) => handleClick(e, '/projects/all', '')}/>
                  </motion.div>
                }
              close
              autoClose
              hideOrbit
              dragablePlanet
              rotation={0}
              dragRadiusPlanet={40}
              bounce
              bounceDirection="BOTTOM"
              bounceRadius={10}
            />
          </Rotate>

          <Rotate topLeft delay={4400}>
            <Planet
              centerContent={
                  <motion.div onHoverStart={{ scale: 1.1 }}>
                    <FaShopify size="42px" style={planetStyle} onClick={(e) => handleClick(e, '/projects/shopify', 'shopify')}/>
                  </motion.div>
                }
              close
              autoClose
              hideOrbit
              dragablePlanet
              rotation={0}
              dragRadiusPlanet={40}
              bounce
              bounceDirection="BOTTOM"
              bounceRadius={10}
            />
          </Rotate>

          <Rotate topLeft delay={4200}>
            <Planet
              centerContent={
                  <motion.div onHoverStart={{ scale: 1.1 }}>
                    <SiJavascript size="42px" style={planetStyle} onClick={(e) => handleClick(e, '/projects/vanilla', 'vanilla')}/>
                  </motion.div>
                }
              close
              autoClose
              hideOrbit
              dragablePlanet
              rotation={0}
              dragRadiusPlanet={40}
              bounce
              bounceDirection="BOTTOM"
              bounceRadius={10}
            />
          </Rotate>
          
          <Rotate topLeft delay={4000}>
            <Planet
              centerContent={
                <FaWordpress size="44px" style={planetStyle} onClick={(e) => handleClick(e, '/projects/wordpress', 'wordpress')}/>
              }
              close
              autoClose
              hideOrbit
              dragablePlanet
              dragRadiusPlanet={40}
              bounce
              bounceDirection="BOTTOM"
              bounceRadius={10}
            />
          </Rotate>

          <Rotate topLeft delay={3800}>
            <Planet
              centerContent={
                <FaReact size="44px" style={planetStyle} onClick={(e) => handleClick(e, '/projects/react', 'react')}/>
              }
              close
              autoClose
              hideOrbit
              dragablePlanet
              dragRadiusPlanet={40}
              bounce
              bounceDirection="BOTTOM"
              bounceRadius={10}
            />
          </Rotate>

          <Rotate topLeft delay={3600}>
            <Planet
              centerContent={
                <SiPython size="12px" style={planetStyle} onClick={(e) => handleClick(e, '/projects/python', 'python')}/>
              }
              close
              autoClose
              hideOrbit
              dragablePlanet
              dragRadiusPlanet={40}
              bounce
              bounceDirection="BOTTOM"
              bounceRadius={10}
            />
          </Rotate>

          <Rotate topLeft delay={3300}>
            <Planet
              centerContent={
                  <motion.div onHoverStart={{ scale: 1.1 }}>
                    <DiSqllite size="42px" style={planetStyle} onClick={(e) => handleClick(e, '/projects/sql', 'sql')}/>
                  </motion.div>
                }
              close
              autoClose
              hideOrbit
              dragablePlanet
              rotation={0}
              dragRadiusPlanet={40}
              bounce
              bounceDirection="BOTTOM"
              bounceRadius={10}
            />
          </Rotate>
          <div />
          <div />
          <div />
          <div />
          <div />
        </Planet>
        }

        {isMobile && //remove rotate animations for mobile
          <Planet
          centerContent={
            <div style={{width:'200px',height:'200px'}}>
              <Fade
                duration={3000}
              >
                <figure className="HeroSection__image-container mx-auto">
                  <Image src={props.image} fluid={true} style={imageStyle}/>
                </figure>
              </Fade>
            </div>
          }
          open
          orbitRadius={210}
          rotation={200} // I can use this to tether to the window size and as the window size is adjusted the characteristics of the solar system nav will change orbiting around my picture as my picture also centers when screen size gets smaller
          hideOrbit
          >
            <Planet
              centerContent={
                  <FaShopify size="42px" style={planetStyle} onClick={(e) => handleClick(e, 'coffee-shop')}/>
                }
              close
              autoClose
              hideOrbit
              dragablePlanet
              rotation={0}
              dragRadiusPlanet={40}
              bounce
              bounceDirection="BOTTOM"
              bounceRadius={10}
            />
            <Planet
              centerContent={
                <FaWordpress size="44px" style={planetStyle} onClick={(e) => handleClick(e, 'fictional-university')}/>
              }
              close
              autoClose
              hideOrbit
              dragablePlanet
              dragRadiusPlanet={40}
              bounce
              bounceDirection="BOTTOM"
              bounceRadius={10}
            />
            <Planet
              centerContent={
                <FaLaptopCode size="54px" style={planetStyle} onClick={(e) => handleClick(e, 'projects')}/>
              }
              close
              autoClose
              hideOrbit
              dragablePlanet
              dragRadiusPlanet={40}
              bounce
              bounceDirection="BOTTOM"
              bounceRadius={10}
            />
          <div />
          <div />
          <div />
          <div />
          <div />
        </Planet>
        }
      </div>
  )
}

export default SolarSystemNav;