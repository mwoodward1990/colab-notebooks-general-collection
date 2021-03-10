import React, { useState } from 'react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const MuiCalendar = ({ date, changeDate }) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
      />
    </MuiPickersUtilsProvider>
  )
}
export default MuiCalendar;