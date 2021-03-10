import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//components
import DashboardBlogs from "./DashboardBlogs";
import DashboardDetails from "./DashboardDetails";
import DashboardItems from "./DashboardItems";
import BootcampItems from "./BootcampItems";
import DashboardProducts from "./DashboardProducts";
import Calendar from './Calendar';
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import WeatherSection from "./WeatherSection";
//database -- utilities
import { useRouter } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";
import { useActivitiesByOwner } from "../util/db.js";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: theme.spacing(3),
  },
}));

function DashboardSection(props) {
  const [pending, setPending] = useState(false);
  const classes = useStyles();
  const auth = useAuth();
  const router = useRouter();
  console.info(auth)

  //? READ
  const {
    data: detailsData,
    status: activityStatus,
    error: activityError
  } = useActivitiesByOwner(auth.user.uid);

  const fullScreen = { height: "100vh", width: "100%", justifyContent: "center" };

  const styles = {
    card_1: {
      padding: "20px",
      width: "100%",
      alignItems: "center",
    },
    card_2: {
    },
    box : {
      padding: "40px",
      display: "flex"
    },
    root: {
      width: 300,
    },
    margin: {
      // height: theme.spacing(3),
    },
  };

  const [date, changeDate] = useState(new Date());
  console.info(date);
  console.info(new Date(date).getDate());


  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {router.query.paid && auth.user.planIsActive && (
          <Box mx="auto" mb={4} maxWidth={400}>
            <Alert severity="success">
              You are now subscribed to the {auth.user.planId} plan
              <span
                role="img"
                aria-label="party"
                style={{ marginLeft: "10px" }}
              >
                🥳
              </span>
            </Alert>
          </Box>
        )}

        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={12}>
            <DashboardDetails auth={auth} classes={classes} />
          </Grid>
        </Grid>

        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={6}>
            <Calendar date={date} changeDate={changeDate} />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <WeatherSection />
          </Grid>
        </Grid>

        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={6}>
            <DashboardItems date={date} />
          </Grid>


          <Grid item={true} xs={12} md={6}>
            <BootcampItems />
          </Grid>
        </Grid>

        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={6}>
            <DashboardProducts />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <DashboardBlogs />
          </Grid>
        </Grid>
        
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={6}>
            <DashboardProducts />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <DashboardBlogs />
          </Grid>
        </Grid>
        
      </Container>
    </Section>
  );
}

export default DashboardSection;
