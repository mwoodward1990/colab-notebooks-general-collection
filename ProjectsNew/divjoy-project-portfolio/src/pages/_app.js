import React from "react";
//global styles
import "./../styles/global.scss";
//pages
import IndexPage from "./index";
import SingleProjectPage from "./single-project";
import ProjectsPage from "./projects";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import AuthPage from "./auth";
import SettingsPage from "./settings";
import FirebaseActionPage from "./firebase-action.js";
import NotFoundPage from "./not-found.js";
//utilities
import { AnimatePresence } from "framer-motion";
import { Switch, Route, Router } from "./../util/router.js";
import { ProvideAuth } from "./../util/auth.js";
import "./../util/analytics.js";
//components
import NavbarCustom from "./../components/NavbarCustom";
import ProjectForm from "./../components/ProjectForm";
import Footer from "./../components/Footer";
//background image
import icon_wallpaper from "../assets/icon_wallpaper.jpg";
//bootstrap
import Container from "react-bootstrap/Container";
//animations
import { motion } from 'framer-motion';


function App(props) {
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  // setTimeout(() => {
  //   document.getElementById('navbar-toggle')
  //   .toggleAttribute('hidden');
  // }, 7000);

  
  const location = window.location;

  return (
    <ProvideAuth>
      <Router>
        <motion.div id="navbar-toggle" hidden={false} initial={{ top: 0, opacity: 1 }} animate={{ opacity: 1, duration: 0.5 }}>
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
        </motion.div>
        <AnimatePresence exitBeforeEnter>
          <Switch>
          {/* <Switch location={location} key={location.pathname}> */}

            <Route exact path="/" component={(props) => ( 
              <IndexPage 
                isFirstMount={isFirstMount} 
                setIsFirstMount={setIsFirstMount}
                {...props}
              />
            )}/>

            <Route exact path="/add-projects" component={ProjectForm} />

            <Route exact path="/project/:item_id" component={SingleProjectPage} />

            <Route exact path="/projects/:type" component={ProjectsPage} /> 

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
