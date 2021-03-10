import React from 'react';
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinkMui from "@material-ui/core/Link";
//database -- utilities
import { Link } from "./../util/router.js";

const DashboardDetails = ({ auth, classes }) => {
  return (
      <Card>
        <CardContent className={classes.cardContent}>
          <Box>
            <Typography variant="h6" paragraph={true}>
              <strong>What is this?</strong>
            </Typography>
            <Typography paragraph={true}>
              The component on your left is an example UI that shows you
              how to fetch, display, and update a list of items that
              belong to the current authenticated user. Try it now by
              adding a couple items.
            </Typography>
            <Typography paragraph={true}>
              It also shows how you can limit features based on plan. If
              you're subscribed to the "pro" or "business" plan then
              you'll be able to use the star button to highlight items,
              otherwise you'll be asked to upgrade your plan.
            </Typography>
            <Typography paragraph={true}>
              After exporting your code, you'll want to modify this
              component to your needs. You may also find it easier to just
              use this component as a reference as you build out your
              custom UI.
            </Typography>
            <Box mt={3}>
              <Typography variant="h6" paragraph={true}>
                <strong>Extra debug info</strong>
              </Typography>
              <Typography component="div">
                <div>
                  You are signed in as <strong>{auth.user.email}</strong>.
                </div>

                {auth.user.stripeSubscriptionId && (
                  <>
                    <div>
                      You are subscribed to the{" "}
                      <strong>{auth.user.planId} plan</strong>.
                    </div>
                    <div>
                      Your plan status is{" "}
                      <strong>
                        {auth.user.stripeSubscriptionStatus}
                      </strong>
                      .
                    </div>
                  </>
                )}

                <div>
                  You can change your account info{` `}
                  {auth.user.stripeSubscriptionId && <>and plan{` `}</>}
                  in{` `}
                  <LinkMui component={Link} to="/settings/general">
                    <strong>settings</strong>
                  </LinkMui>
                  .
                </div>

                {!auth.user.stripeSubscriptionId && (
                  <div>
                    You can signup for a plan in{" "}
                    <LinkMui component={Link} to="/pricing">
                      <strong>pricing</strong>
                    </LinkMui>
                    .
                  </div>
                )}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
  )
}
export default DashboardDetails;