import React, { useState }from "react";
import "./SectionHeader.scss";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Section from "./Section";
// animation
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
//images
import trailhead_badge from "../data/trailhead-badge.png";
// icons
import { 
  FaReact,
  FaShopify, 
  FaWordpress, 
  FaSalesforce
  } from 'react-icons/fa';
import { SiJavascript, SiPython } from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';
//hooks
import { useWindowSize } from '../hooks/useWindowSize';

function SingleSectionHeader(props) {
  const project = props.project;
  const [features, setFeatures] = useState(true)
  const [likes, setLikes] = useState(false)
  const [learned, setLearned] = useState(false)
  const [tech, setTech] = useState(false)

  const { isMobile } = useWindowSize();
  
  // Render nothing if no title or subtitle
  if (!project.title && !project.subtitle) {
    return null;
  }  

  const techsArr = project.technologies.split(", ");
  // write a function that takes in the techsArr and matches it to the icon and returns the icon
  function getIcon(tech) { //todo --> CHANGE TO SWITCH CASE
      if ( tech.toLowerCase() === "bootstrap" ) {
        return null; // replace null with bootstrap icon
      }
      if ( tech.toLowerCase() === "javascript" ) {
        return ( 
          <div> 
            <SiJavascript />
          </div>
          ); // replace null with javascript icon
      }
      if ( tech.toLowerCase() === "react" ) {
        return (
          <div>
            <FaReact />
          </div>
        ); // replace null with react icon
      }
      if ( tech.toLowerCase() === "shopify" ) {
        return (
          <div>
            <FaShopify />
          </div>
        ); // replace null with shopify icon
      }
      if ( tech.toLowerCase() === "redux" ) {
        return null; // replace null with redux icon
      }
      if ( tech.toLowerCase() === "netlify" ) {
        return null; // replace null with netlify icon
      }
      if ( tech.toLowerCase() === "firebase" ) {
        return null; // replace null with firebase icon
      }
      if ( tech.toLowerCase() === "python" ) {
        return (
          <SiPython />
          ); // replace null with python icon
      }
      if ( tech.toLowerCase() === "mongodb" ) {
        return null; // replace null with mongodb icon
      }
      if ( tech.toLowerCase() === "sql" ) {
        return (
          <DiSqllite />
          ); // replace null with sql icon
      }
      if ( tech.toLowerCase() === "wordpress" ) {
        return (
          <FaWordpress />
          ); // replace null with sql icon
      }
      if ( tech.toLowerCase() === "salesforce" ) {
        return (
          <FaSalesforce />
          ); // replace null with sql icon
      }
  }

  function getIcons(techsArr) {
    const icons = []
    techsArr.forEach(tech => {
      icons.push(getIcon(tech));
    })
    return icons;
  }
  const icons = getIcons(techsArr);


  function selector(id) {
    if (id === "features") {
      if (!features) {
        setFeatures(true)
        setLikes(false)
        setLearned(false)
        setTech(false)
      }
    }

    if (id === "likes") {
      if (!likes) {
        setLikes(true)
        setFeatures(false)
        setLearned(false)
        setTech(false)
      } 
    }

    if (id === "learned") {
      if (!learned) {
        setLearned(true)
        setLikes(false)
        setFeatures(false)
        setTech(false)
      } 
    }

    if (id === "tech") {
      if (!tech) {
        setTech(true)
        setLikes(false)
        setLearned(false)
        setFeatures(false)
      } 
    }
  }

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <header
        className={
          "SectionHeader" + (props.className ? ` ${props.className}` : "")
        }
      >
      {project.title && (
        <Fade
          bottom
          duration={1000}
          delay={500}
          distance="30px"
        >
        <h1 className={
            "font-weight-bold" +
            (project.subtitle && props.spaced ? " mb-4" : "") +
            (!project.subtitle ? " mb-0" : "") +
            (props.size ? ` h${props.size}` : "")
          }
        >
          {project.title}
        </h1>
        </Fade>
      )}
      </header>
      <Row style={{justifyContent:'center'}}>
        {project.features && ( 
          <Bounce top delay={1500}>
            <Button variant="outline-secondary" type="button" size="sm" active onClick={() => selector("features")}>
              <h5>Features</h5>
            </Button>
          </Bounce> 
        )}
        {project.likes && ( 
          <Bounce top delay={1700}>
            <Button variant="outline-secondary" type="button" size="sm" onClick={() => selector("likes")}>
              {project.id === "salesforce" ?
                <h5>Salesforce Instance</h5>:
                  <h5>Likes</h5>
              }
            </Button>
          </Bounce> 
        )}
        {(project.learnedFront || project.learnedBack) && ( 
          <Bounce top delay={1900}>
            <Button variant="outline-secondary" type="button" size="sm" onClick={() => selector("learned")}>
              {project.id === "salesforce" ?
                <h5>Trailhead Progress</h5> :
                  <h5>Learned</h5>
              }
            </Button>
          </Bounce> 
        )}
        {project.technologies && ( 
          <Bounce top delay={2100}>
            <Button variant="outline-secondary" type="button" size="sm" onClick={() => selector("tech")}>
              <h5>Tech</h5>
            </Button>
          </Bounce> 
        )}
      </Row>
      <Col>
        {features === true &&
        <Fade
          bottom
          duration={1200}
          delay={700}
          distance="30px"
        >
            <p className="SectionHeader__subtitle mb-0">
              {project.features}
            </p>
        </Fade>
        }
    <br />
        {likes === true &&
        <Fade
          bottom
          duration={1200}
          delay={700}
          distance="30px"
        >
          {project.id === "salesforce" ?
            <div>
              <p>**NOTE** To login click the <strong>"To Salesforce"</strong> button and enter the following guest login credentials for Salesforce. <br />
              <br/>
              <strong>User:</strong> Michaels_Guest@test.com<br />
              <strong>Pass:</strong> ThePassword.1234<br />
              <br/>
              This is a simple example of user management but use the credentials and have a look around my SF instance. I haven't done much yet but I could. Including security, automation, administration, and development. For now there is just some custom apps I was experimenting with to connect Shopify and there is a connected app configuration I set up for testing the API's in and out of Salesforce.</p> 
              <a href="https://mindful-goat-q634g5-dev-ed.my.salesforce.com/" target="blank"><Button color="primary">To Salesforce</Button></a>
            </div> :
              <p>{project.likes}</p>
          }
        </Fade>
        }      

        {learned === true &&
        <Fade
          bottom
          duration={1200}
          delay={700}
          distance="30px"
        >
          {project.id === "salesforce" ?
            <Row>
              <Col sm={{span:12,order:2}} md={{span:6,order:2}}>
                <p>I have spent many hours and made a lot of progress in the Trailhead Community including completing multiple Superbadges. Check out my profile.</p>
                <a href="https://trailblazer.me/id/michaelawoodward" target="blank"  style={{float:'right'}}>Trailhead Profile</a>
              </Col>
              <Col sm={{span:12,order:1}} md={{span:6,order:1}}>
                {isMobile ?
                  <center><Image src={trailhead_badge} alt="Trailhead Progess Badge" style={{height:'225px'}}/></center> :
                    <Image src={trailhead_badge} alt="Trailhead Progess Badge" style={{height:'225px'}}/>
                }
              </Col>
            </Row>
          :
            <p>
              {project.learnedFront && (
                <div><b>Front End</b>: {project.learnedFront}</div>
              )}
              <br />
              {project.learnedBack && (
                <div><b>Back End</b>: {project.learnedBack}</div>
              )}
            </p>
          }
        </Fade>
        }
        
        {tech === true &&
          <Fade
            bottom
            duration={1200}
            delay={700}
            distance="30px"
          >
            {icons && (
              <Row style={{ 
                display:"flex", 
                gap:"20px", 
                textAlign:"center", 
                justifyContent: "center", 
                alignItems: "center" 
                }}>
                {icons.map((icon, i) =>
                  <span key={i} style={{fontSize:"30px"}}>{icon}</span>
                )}
              </Row>
            )}
          </Fade>
        }
      </Col>
    </Section>
  );
}
export default SingleSectionHeader;
