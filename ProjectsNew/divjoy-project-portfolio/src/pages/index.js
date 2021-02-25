import React from "react";
//components
import HeroSection from "./../components/HeroSection";
import Section from "./../components/Section";
import SectionHeader from "./../components/SectionHeader";
//Bootstrap
import Container from "react-bootstrap/Container";
//animations
import { motion } from 'framer-motion';
//background image
import icon_wallpaper from "../assets/icon_wallpaper.jpg";
// icons
import { 
  FaShopify, 
  FaWordpress,
  FaCode,
  FaSalesforce
} from 'react-icons/fa';

function IndexPage(props) {
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
    <>
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <HeroSection
        bg=""
        textColor="dark"
        size="md"
        bgImage={icon_wallpaper}
        bgImageOpacity={0.3}
        title="Michael Woodward"
        subtitle="Your friendly neighborhood full stack software developer. I am a self taught programmer that is completely passionate about writing code and using creativity to push the boundaries of innovation. Some of the languages and platforms I work with are predominantly Javascript and React, however, second not by much, is Python, followed by popular platforms such as Salesforce, Shopify, and Wordpress. My concentration is business, with a special focus on e-commerce. Let's work together! Cheers!"
        buttonText="Let's talk"
        buttonColor="primary"
        image="https://i.imgur.com/Q3XKOQe.png"
        buttonOnClick={() => {
          // Navigate to pricing page
          window.scrollTo(0,document.body.scrollHeight);
        }}
      />
    </motion.div>
    </>
  );
}

export default IndexPage;
