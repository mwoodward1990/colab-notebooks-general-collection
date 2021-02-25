import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SingleSectionHeader from "./SingleSectionHeader";
//animations
import { motion } from 'framer-motion';

function SingleProjectSection(props) {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
  };
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
      >
        {props.project.title === null ? "Loading..." : (
          <Container style={{
            backgroundColor:"rgba(255, 255, 255, 0.3", 
            backdropFilter: "blur(2px)", 
            border: "rgba(255, 255, 255, 0.4) 1px solid", 
            padding:"36px", 
            boxShadow:"2px 10px 10px rgba(0, 0, 0, 0.4)"
          }}>
            <SingleSectionHeader
              project={props.project}
              alt={props.project.title}
              size={1}
              spaced={true}
              className="text-center"
              button={props.button}
            />
          </Container>
        )}
      </Section>
    </motion.div>
  );
}

export default SingleProjectSection;
