import React from "react";
import AllProjectsSection from '../components/AllProjectsSection'
//background image
import icon_wallpaper from "../assets/icon_wallpaper.jpg";
// animation
import { motion } from 'framer-motion'
import { pageVariants, PurpleBoxLeftTransition, BlackBoxTransition, BlueBoxTransition } from '../animations';
//data
import { projectsData } from '../data/data'
//utilities
import { useRouter } from "../util/router";


function ProjectsPage(props) {
  const router = useRouter();
  const label = router.location.pathname.split('/')[2]; // parse name from window.location.pathname
  const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1); //capitalize first letter

  return (
    <>
      <div>
        <motion.section exit={{ opacity: 0 }}>
          <BlackBoxTransition />
          <BlueBoxTransition />
          <PurpleBoxLeftTransition />

          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <AllProjectsSection
              bg=""
              bgImage={icon_wallpaper}
              bgImageOpacity={0.4}
              title={formattedLabel + " Projects"}
              subtitle=""
              textColor=""
              data={projectsData}
              label={label}
            />
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}

export default ProjectsPage;
