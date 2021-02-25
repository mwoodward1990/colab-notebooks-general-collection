import React from "react";
import ProjectsSectionTwo from '../components/ProjectsSectionTwo'
//background image
import icon_wallpaper from "../assets/icon_wallpaper.jpg";

function ProjectsPage(props) {
  return (
    <>
      <ProjectsSectionTwo 
        bgImage={icon_wallpaper}
        bgImageOpacity={0.4}
      />
    </>
  );
}

export default ProjectsPage;
