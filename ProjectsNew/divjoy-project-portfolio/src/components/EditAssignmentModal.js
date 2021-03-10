import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { useAuth } from "../util/auth.js";
import { useForm } from "react-hook-form";
import { useAssignment, updateAssignment, createAssignment } from "../util/db.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingBottom: 24,
  },
}));


function EditAssignmentModal(props) {
  const classes = useStyles();
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const [selectedDate, handleDateChange] = useState(new Date());

  const { register, handleSubmit, errors } = useForm();

  // This will fetch assignment if props.id is defined
  // Otherwise query does nothing and we assume
  // we are creating a new assignment.
  const { data: assignmentData, status: assignmentStatus } = useAssignment(props.id);

  // If we are updating an existing assignment
  // don't show modal until assignment data is fetched.
  if (props.id && assignmentStatus !== "success") {
    return null;
  }

  const onSubmit = (data) => {
    setPending(true);

    const query = props.id
      ? updateAssignment(props.id, data)
      : createAssignment({ owner: auth.user.id, ...data });

    query
      .then(() => {
        // Let parent know we're done so they can hide modal
        props.onDone();
      })
      .catch((error) => {
        // Hide pending indicator
        setPending(false);
        // Show error alert message
        setFormAlert({
          type: "error",
          message: error.message,
        });
      });
  };

  return (
    <Dialog open={true} onClose={props.onDone}>
      <DialogTitle>
        {props.id && <>Update</>}
        {!props.id && <>Create</>}
        {` `}Assignment
      </DialogTitle>
      <DialogContent className={classes.content}>
        {formAlert && (
          <Box mb={4}>
            <Alert severity={formAlert.type}>{formAlert.message}</Alert>
          </Box>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container={true} spacing={3}>
            <Grid item={true} xs={12}>
              <TextField
                variant="outlined"
                type="text"
                label="Name"
                name="name"
                defaultValue={assignmentData && assignmentData.name}
                error={errors.name ? true : false}
                helperText={errors.name && errors.name.message}
                fullWidth={true}
                autoFocus={true}
                inputRef={register({
                  required: "Please enter a name",
                })}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <label htmlFor="">Due Date</label>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardDatePicker
                placeholder="2018/10/10"
                value={selectedDate}
                onChange={date => handleDateChange(date)}
                format="MM/DD/yyyy"
              />
            </MuiPickersUtilsProvider>
            </Grid>
            <Grid item={true} xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                disabled={pending}
              >
                {!pending && <span>Save</span>}

                {pending && <CircularProgress size={28} />}
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditAssignmentModal;
