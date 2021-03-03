import React, { useState } from 'react';
//components
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Carousel from './Carousel';
import Grid from './Grid';
//bootstrap
import { Button } from "reactstrap";
//animations
import { motion } from 'framer-motion';

const ProjectsSectionTwo = (props) => {
  const { data, label } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

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

  return(
    <center>
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
          bgImage={props.bgImage}
          bgImageOpacity={props.bgImageOpacity}
          style={{padding: "25px"}}
        >
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={1}
            spaced={true}
          />
          
          <Grid data={data} label={label} />

          {/* <Carousel 
            items={data}
            activeIndex={activeIndex}
            setAnimating={setAnimating}
            goToIndex={goToIndex}
            next={next}
            previous={previous}
          /> */}
        </Section>
      </motion.div>
    </center>
  )
}
export default ProjectsSectionTwo;