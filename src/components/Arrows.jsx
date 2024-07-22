import React, { Fragment } from "react";
import { Grid, IconButton } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export const ArrowUp = ({
  hoursPlusHandler,
  minutesPlusHandler,
  secondsPlusHandler,
}) => {
  return (
    <Fragment>
      <Grid item>
        <IconButton color="inherit" onClick={hoursPlusHandler} size="small">
          <KeyboardArrowUpIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="inherit" onClick={minutesPlusHandler} size="small">
          <KeyboardArrowUpIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="inherit" onClick={secondsPlusHandler} size="small">
          <KeyboardArrowUpIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Fragment>
  );
};

export const ArrowDown = ({
  hoursMinusHandler,
  minutesMinusHandler,
  secondsMinusHandler,
}) => {
  return (
    <Fragment>
      <Grid item>
        <IconButton color="inherit" onClick={hoursMinusHandler} size="small">
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="inherit" onClick={minutesMinusHandler} size="small">
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="inherit" onClick={secondsMinusHandler} size="small">
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Fragment>
  );
};
