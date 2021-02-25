import React from "react";
import "./../styles/global.scss";
import IndexPage from "./index";
import SingleProjectPage from "./single-project";
import ProjectsPage from "./projects";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import AuthPage from "./auth";
import SettingsPage from "./settings";
import FirebaseActionPage from "./firebase-action.js";
import NotFoundPage from "./not-found.js";

import { Switch, Route, Router } from "./../util/router.js";
import { ProvideAuth } from "./../util/auth.js";
import "./../util/analytics.js";

import NavbarCustom from "./../components/NavbarCustom";
import ProjectForm from "./../components/ProjectForm";
import Footer from "./../components/Footer";

//background image
import icon_wallpaper from "../assets/icon_wallpaper.jpg";
//bootstrap
import Container from "react-bootstrap/Container";
import { AnimatePresence } from "framer-motion";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <NavbarCustom
          bg=""
          variant="light"
          expand="md"
          logo="https://i.imgur.com/IAGoAki.png"
          logo_title=""
          link_1="Home"
          link_2="Contact"
          link_3=""
          link_4=""
        />
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/add-projects" component={ProjectForm} />

            <Route exact path="/project/:item_id" component={SingleProjectPage} />

            <Route exact path="/projects" component={ProjectsPage} /> 

            <Route exact path="/contact" component={ContactPage} /> 

            {/* <Route path="/project/:item_id" component={Products} /> */}

            <Route exact path="/admin" component={DashboardPage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/firebase-action" component={FirebaseActionPage} />

            <Route component={NotFoundPage} />
          </Switch>
        </AnimatePresence>
          {/* <Footer
          id="footer"
          bg="transparent"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={0.3}
          description="A short description of what you do here"
          copyright="© 2020 Michael Woodward"
          logo="https://i.imgur.com/IAGoAki.png"
          logo_title=""
          link_1="Top"
          link_2="Blog"
          link_3="Projects"
          link_4="Contact"
        /> */}
          {/* <Container style={{
              width:"5%",
              height:"100vh",
              maxHeight: "1200px",
              backgroundColor:"#222",
              opacity: "0.5",
              border: "rgba(255, 255 , 255, 0.5) 1px solid",
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.6)",
              zIndex:"-2",
              top:"0",
              left:"0",
              position:"absolute"
            }}
            active={false}
          >
            <h3 className="side-title" style={{}}>HOME</h3>
          </Container> */}
      </Router>
    </ProvideAuth>
  );
}

export default App;
