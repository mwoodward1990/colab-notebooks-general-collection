import React from "react";
import DashboardSection from "./../components/DashboardSection";
import { requireAuth } from "./../util/auth.js";
//background image
import icon_wallpaper from "../assets/icon_wallpaper.jpg";

function DashboardPage(props) {
  return (
    <DashboardSection
      bgColor="default"
      size="medium"
      bgImage=""
      bgImageOpacity={1}
      title="Dashboard"
      subtitle=""
    />
  );
}

export default requireAuth(DashboardPage);
