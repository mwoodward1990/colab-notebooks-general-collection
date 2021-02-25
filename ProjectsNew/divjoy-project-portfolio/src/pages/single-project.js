import React, { useState } from "react";
// utilities
import { useRouter } from "../util/router.js";
import { findId } from "../data/findId";
import setGif from '../data/setGif';
// components
import VideoSection from "./../components/VideoSection";
import Section from "./../components/Section";
import SingleProjectSection from "../components/SingleProjectSection";
// styles
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// animation
import { motion } from 'framer-motion'
import { pageVariants } from '../animations';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
//data
import { projectsData } from "../data/data";
//hooks
import { useWindowSize } from '../hooks/useWindowSize';
//background image
import icon_wallpaper from "../assets/icon_wallpaper.jpg";

function AboutPage(props) {
  const router = useRouter();
  const { isMobile, isDesktop } = useWindowSize();
  const [isLoading, setIsLoading] = useState(false);
  const id = router.location.state.id;
  let gif = router.location.state.gif;
  if (id === "salesforce") {
    gif = "shopiforce-connector";
  }
  const video = setGif(gif);
  const project = findId(projectsData, id, setIsLoading); // be mindful this hook like function needs to be adjusted if data fields are adjusted.
  function handleOnClick(e){
    e.preventDefault();
    router.history.goBack();
  }
  // if (!project) {
  //   setIsLoading(true);
  // } else {
  //   setIsLoading(false);
  // }

  console.info(isLoading);
  return (
    <>
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size="md"
        bgImage={icon_wallpaper}
        bgImageOpacity={0.4}
        style={{padding: "25px"}}
      >
        <Row>
          <Col xs={{span:12, order: 12}} md={{span:12, order: 12}} lg={{span:6, order: 1}}>
          <Fade duration={1000}>
            <VideoSection
              bg=""
              textColor="dark"
              size="md"
              bgImage=""
              bgImageOpacity={0.4}
              title=""
              subtitle=""
              imgSrc={project.img}
              embedUrl={video}
              url={project.url}
              repo={project.repo}
            />
          </Fade>
            <center>
              {isDesktop &&
                <Bounce top delay={1800}>
                  <Button className="hero-btn" onClick={handleOnClick} color="primary">Back</Button>
                </Bounce>
              }
              {isMobile &&
                <Button className="hero-btn" onClick={handleOnClick} color="primary">Back</Button>
              }
            </center>
          </Col>
          <Col xs={{span:12, order: 1}} md={{span:12, order: 1}} lg={{span:6, order: 2}}>
            <SingleProjectSection
              bg=""
              textColor="dark"
              size="md"
              bgImage=""
              bgImageOpacity={0.4}
              project={project}
            />
          </Col>
        </Row>
      </Section>
    </motion.div>
    </>
  );
}

export default AboutPage;
