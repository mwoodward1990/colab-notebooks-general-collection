import React from "react";
//components
import HeroSection from "./../components/HeroSection";
//animations
import { motion } from 'framer-motion';
import { 
  pageVariants,
  leftPageVariants,
  BlackBoxTransition,
  BlueBoxTransition, 
  PurpleBoxLeftTransition,
  WhiteBoxDownTransition, 
} from '../animations';
//background image
import icon_wallpaper from "../assets/icon_wallpaper.jpg";
//utilities
import { useHistory } from '../util/router';


function IndexPage(props) {
  const history = useHistory();
  const {isFirstMount, setIsFirstMount} = props;
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });
    return unlisten;
  }, [history, isFirstMount, setIsFirstMount]);

  return (
    <div>
      <motion.section exit={{ opacity: 0 }}>
        {isFirstMount ? //if this is the first time the page loads then run the full page transitions
          <div>
            <BlackBoxTransition />
            <BlueBoxTransition />
            <PurpleBoxLeftTransition />
          </div> :
            <div>
              <BlueBoxTransition />
              <WhiteBoxDownTransition />
            </div>
        }

        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={isFirstMount ? pageVariants : leftPageVariants}
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
      </motion.section>
    </div>
  );
}

export default IndexPage;
