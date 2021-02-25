import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//calculators
import {
  bmrCalculator,
  totalEnergyExpenditure,
  harrisBenedictFormula,
  calculateMacronutrients,
  breakdownMacros
} from "../util/useActivityCalculations";
//database -- utilities
import { useActivity, useActivitiesByOwner, updateActivity, createActivity } from "./../util/db.js";

export default function DetailsForm({ auth }) {
  const [pending, setPending] = useState(false);
  //state to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    height: '',
    weight: '',
    age: '',
    gender: '',
    weight_goal: '',
    activity_level: '',
  });
  //destructure form data
  const { name, email, height, weight, age, gender, weight_goal, activity_level } = formData;
  //function to update form data state upon form change
  const onChange = e => (
    setFormData({ ...formData, [e.target.name]: e.target.value })
  );

  //state to hold activity calculations
  const [activityData, setActivityData] = useState({
    bmr: '',
    tde: '',
    dailyCalExp: '',
    macronutrients: '',
    macroGramsByMeal: ''
  });
  //destructure activity data
  const { bmr, tde, dailyCalExp, macronutrients, macroGramsByMeal } = activityData; 

  //** Create Read and Delete operations */
  //? CREATE
  async function addExperience(data) {
    setPending(true);
    if (data) {
      console.log(data)
      try {
        if ( weight && height && age && gender ) {
          //run calculations
          const bmr = bmrCalculator(weight, height, age, gender); //Basal Metabolic Rate
          const dailyCaloricExpenditure = harrisBenedictFormula(bmr, activity_level); //Daily Caloric Expenditure
          const tde = totalEnergyExpenditure(weight, weight_goal); //including additional Activity
          const macronutrients = calculateMacronutrients(weight_goal, tde); //caluclate generalized macronutrient requirements
          // const macroBreakdown = breakdownMacros(macronutrients); //calculate needs per meal **( x / 3 )
          console.info(macronutrients);
          //set the newly calculated Activity metrics in state
          setActivityData({ 
            ...activityData, 
            bmr: bmr, 
            tde: tde, 
            dailyCalExp: dailyCaloricExpenditure, 
            macronutrients: macronutrients, 
            // macroGramsByMeal: macroBreakdown
          });
          console.info(activityData);
          //set the Activity metrics in the Firestore Database
          createActivity({ 
            owner: auth.user.id, 
            personal: formData, 
            activity: activityData 
          });
          // }));
          setPending(false);
        }
      } catch (exception) {
        console.error(exception);
        setPending(false);
      }
    }
  }

  //? UPDATE
  function editStats() {
    //* Explore this --

    // updateActivity(props.id, data);
    updateActivity({ 
      owner: auth.user.id, 
      personal: formData, 
      activity: activityData 
    }) 
  }


  //? DELETE
  const clearLocal = () => {
    localStorage.clear();
  };


  const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => (<Radio color="default" {...props} />));

  const [selectedValue, setSelectedValue] = React.useState('a');
  const [value, setValue] = React.useState('female');
  const handleChange = (event) => {
    if (event.target.name === "gender1") {
      setValue(event.target.value);
    }

    if (event.target.name === "radio-button-demo") {
      setSelectedValue(event.target.value);
    }
  };
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 25,
      label: '25',
    },
    {
      value: 37,
      label: '37',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 100,
      label: '100',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }

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

  return (
    <>
    <Box style={styles.box}>
      <Card style={styles.card_1}>
        <h1 className="large text-primary">Personal Activity Details</h1>
        <p className="lead">
          <i className="fas fa-code-branch" /> Add your personal details as well as your daily activities. 
        </p>
        <small>* = required field</small>
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            addExperience(formData);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="* Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="* Email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Height"
              name="height"
              value={height}
              onChange={onChange}
            />
            <div className={styles.root}>
              <Typography id="discrete-slider-custom" gutterBottom>
              </Typography>
              <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </div>
          </div>
          <div className="form-group">
            <input 
              type="number" 
              placeholder="Weight" 
              name="weight" 
              value={weight} 
              onChange={onChange} 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Gender" 
              name="gender" 
              value={gender} 
              onChange={onChange} 
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={age}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              name="weight_goal"
              placeholder="Weight Goal"
              value={weight_goal}
              onChange={onChange}
            />
            <label>Weight Goal</label>
            <div>
              <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
              />
              <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
              />
              <GreenRadio
                checked={selectedValue === 'c'}
                onChange={handleChange}
                value="c"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
              />
              <Radio
                checked={selectedValue === 'd'}
                onChange={handleChange}
                value="d"
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'D' }}
              />
              <Radio
                checked={selectedValue === 'e'}
                onChange={handleChange}
                value="e"
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'E' }}
                size="small"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              name="activity_level"
              placeholder="Activity Level"
              value={activity_level}
              onChange={onChange}
            />
            <label>Activity Level</label>
            <div>
            <Radio
              checked={selectedValue === 'a'}
              onChange={handleChange}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
            <Radio
              checked={selectedValue === 'b'}
              onChange={handleChange}
              value="b"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'B' }}
            />
            <GreenRadio
              checked={selectedValue === 'c'}
              onChange={handleChange}
              value="c"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'C' }}
            />
            <Radio
              checked={selectedValue === 'd'}
              onChange={handleChange}
              value="d"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'D' }}
            />
            <Radio
              checked={selectedValue === 'e'}
              onChange={handleChange}
              value="e"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'E' }}
              size="small"
            />
          </div>
          </div>
          <Button variant="contained" color="primary" type="submit">Submit</Button>
          <Button variant="contained" color="primary" onClick={clearLocal}>Clear</Button>
        </form>
      </Card>
  </Box>
  </>
  )
}