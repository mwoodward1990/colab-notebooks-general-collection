import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import EditAssignmentModal from "./EditAssignmentModal";
import { useAuth } from "../util/auth.js";
import { updateAssignment, deleteAssignment, useAssignmentsByOwner } from "../util/db.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperAssignments: {
    minHeight: "300px",
  },
  featured: {
    backgroundColor:
      theme.palette.type === "dark" ? theme.palette.action.selected : "#fdf8c2",
  },
  starFeatured: {
    color: theme.palette.warning.main,
  },
}));

function BootcampAssignments(props) {
  const classes = useStyles();
  const todaysDate = new Date().getDate();
  const month = new Date().getMonth();
  const auth = useAuth();

  const {
    data: assignments,
    status: assignmentsStatus,
    error: assignmentsError,
  } = useAssignmentsByOwner(auth.user.uid);

  console.info(assignments);

  const [creatingAssignment, setCreatingAssignment] = useState(false);

  const [updatingAssignmentId, setUpdatingAssignmentId] = useState(null);

  const assignmentsAreEmpty = !assignments || assignments.length === 0;

  const canUseStar =
    auth.user.planIsActive &&
    (auth.user.planId === "pro" || auth.user.planId === "business");

  const handleStarAssignment = (assignment) => {
    updateAssignment(assignment.id, { featured: !assignment.featured });

    //? IF WOULD LIKE TO USE PAID FEATURES
    // if (canUseStar) {
    //   updateAssignment(Assignment.id, { featured: !Assignment.featured });
    // } else {
    //   alert("You must upgrade to the pro or business plan to use this feature");
    // }
  };

  const handleCheckbox = (event, assignment) => {
    updateAssignment(assignment.id, { completed: !assignment.completed });
  };

  const date = new Date(props.date).getDate();
  {assignments &&
    console.info(assignments.length)
  }

  return (
    <>
      {assignmentsError && (
        <Box mb={3}>
          <Alert severity="error">{assignmentsError.message}</Alert>
        </Box>
      )}

      <Paper className={classes.paperAssignments}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignAssignments="center"
          padding={2}
        >
          <Typography className={classes.text} variant="h5">
            Bootcamp Project Assignments
          </Typography>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={() => setCreatingAssignment(true)}
          >
            Add Assignment
          </Button>
        </Box>
        <Divider />

        {(assignmentsStatus === "loading" || assignmentsAreEmpty) && (
          <Box py={5} px={3} align="center">
            {assignmentsStatus === "loading" && <CircularProgress size={32} />}

            {( assignmentsStatus !== "loading" && assignmentsAreEmpty ) && (
              <>Nothing yet. Click the button to add your first Assignment.</>
            )}
          </Box>
        )}

        {assignments &&
          <Box py={5} px={3} align="center">
              <># of Assignments -- {assignments.length}</>
          </Box>
        }

        {assignmentsStatus !== "loading" && assignments && assignments.length > 0 && (
          <List disablePadding={true}>
            {assignments.map((assignment, index) => (
              <ListItem
                key={index}
                divider={index !== assignments.length - 1}
                className={assignment.featured && classes.featured}
              >
                {assignment.completed ?
                  <ListItemText>
                    <strike>{index + 1}. {assignment.name} <b> Due: {month+1}/{assignment.date}</b></strike>
                  </ListItemText> :
                    <ListItemText>
                      {index + 1}. {assignment.name} <b> Due: {month+1}/{assignment.date}</b>
                    </ListItemText>
                }
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="completed"
                  >
                    <Checkbox
                      checked={assignment.completed}
                      onChange={e => handleCheckbox(e, assignment)}
                      color="primary"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="star"
                    onClick={() => handleStarAssignment(assignment)}
                    className={assignment.featured && classes.starFeatured}
                  >
                    <StarIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="update"
                    onClick={() => setUpdatingAssignmentId(assignment.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteAssignment(assignment.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
      </Paper>

      {creatingAssignment && <EditAssignmentModal onDone={() => setCreatingAssignment(false)} />}

      {updatingAssignmentId && (
        <EditAssignmentModal
          id={updatingAssignmentId}
          onDone={() => setUpdatingAssignmentId(null)}
        />
      )}
    </>
  );
}

export default BootcampAssignments;
