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
  FaRocket,
  FaSalesforce
} from 'react-icons/fa';
//animations
import { Planet } from 'react-planet';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
//Hooks
import { useWindowSize } from '../hooks/useWindowSize';
import { useRouter } from "../util/router";

const SolarSystemNav = (props) => {
  const router = useRouter();
  const { isMobile, isDesktop } = useWindowSize();

  const imageStyle = { boxShadow:'4px 10px 10px gray' }
  const planetStyle = { 
    boxShadow:'4px 10px 10px gray', 
    borderRadius:'50px', 
    height:'64px', 
    width:'64px',
    marginRight:'16px',
    marginBottom: '16px'
  };
  function handleClick(e, item_id) {
    e.preventDefault();
    if (item_id === "projects") {
      router.push({
        pathname: "/"+item_id
      })
    } else {
      router.push({
        pathname: "/project/"+item_id,
        state: {
          id: item_id
        }
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
          <Rotate topLeft delay={1400}>
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
          </Rotate>
          <Rotate topLeft delay={1800}>
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
          </Rotate>
          <Rotate topLeft delay={2200}>
            <Planet
              centerContent={
                <FaLaptopCode size="12px" style={planetStyle} onClick={(e) => handleClick(e, 'projects')}/>
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