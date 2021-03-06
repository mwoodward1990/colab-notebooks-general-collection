import React, { useRef, useEffect } from "react";
//components
import ContactSection from '../components/ContactSection';
//animations
import { motion } from 'framer-motion';
import { pageVariants, BlackBoxTransition, BlueBoxTransition } from '../animations';
//background image
import icon_wallpaper from "../assets/icon_wallpaper.jpg";

const contact = () => { 
  return ( 
    <>
      <motion.section exit={{ opacity: 0 }}>
        <BlackBoxTransition />
        <BlueBoxTransition />


        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <ContactSection 
            bg=""
            textColor="dark"
            size="md"
            bgImage={icon_wallpaper}
            bgImageOpacity={0.4}
            title="Contact Me"
            subtitle="I'm for hire! Send me a message!"
            buttonText="Send message"
            buttonColor="primary"
            showNameField={true}
            inputSize="md"
          />
        </motion.div>
      </motion.section>
    </>
    ) 
  }
export default contact;