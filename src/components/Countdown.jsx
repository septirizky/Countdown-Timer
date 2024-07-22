import React, { Fragment, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";
import Timer from "./Timer";
import Buttons from "./Buttons";
import { ArrowUp, ArrowDown } from "./Arrows";

const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleStart = () => {
    setPaused(true);
    setStarted(true);
  };

  const handlePause = () => {
    if (paused === false) {
      setPaused(true);
    } else {
      setPaused(false);
    }
  };

  const handleReset = () => {
    setStarted(false);
    setPaused(false);
    setFinished(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const hoursPlusHandler = () => {
    setHours(hours + 1);
  };

  const hoursMinusHandler = () => {
    if (hours > 0) {
      setHours(hours - 1);
    }
  };

  const minutesPlusHandler = () => {
    if (minutes < 59) {
      setMinutes(minutes + 1);
    } else {
      setMinutes(0);
      setHours(hours + 1);
    }
  };

  const minutesMinusHandler = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    } else {
      if (hours > 0) {
        setMinutes(59);
        setHours(hours - 1);
      }
    }
  };

  const secondsPlusHandler = () => {
    if (seconds < 59) {
      setSeconds(seconds + 1);
    } else {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
  };

  const secondsMinusHandler = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      if (minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      }
    }
  };

  if (finished) {
    return (
      <Fragment>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            BOOOMMM!!
          </Typography>
        </Grid>
        <Grid item>
          <Buttons
            started={started}
            paused={paused}
            finished={finished}
            handleStart={handleStart}
            handlePause={handlePause}
            handleReset={handleReset}
          />
        </Grid>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        {started ? (
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Time Remaining
            </Typography>
          </Grid>
        ) : (
          <Grid container justify="center" spacing={3}>
            <ArrowUp
              hoursPlusHandler={hoursPlusHandler}
              minutesPlusHandler={minutesPlusHandler}
              secondsPlusHandler={secondsPlusHandler}
            />
          </Grid>
        )}
        <Timer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          started={started}
          paused={paused}
          finished={finished}
          setStarted={setStarted}
          setFinished={setFinished}
          handleStart={handleStart}
          handlePause={handlePause}
          handleReset={handleReset}
        />
        {started ? (
          <Grid item>
            <TimerIcon fontSize="large" style={{ marginTop: 4 }} />
          </Grid>
        ) : (
          <Grid container justify="center" spacing={3}>
            <ArrowDown
              hoursMinusHandler={hoursMinusHandler}
              minutesMinusHandler={minutesMinusHandler}
              secondsMinusHandler={secondsMinusHandler}
            />
          </Grid>
        )}
        <Grid container justify="space-evenly" style={{ marginTop: 22 }}>
          <Buttons
            started={started}
            paused={paused}
            finished={finished}
            handleStart={handleStart}
            handlePause={handlePause}
            handleReset={handleReset}
          />
        </Grid>
      </Fragment>
    );
  }
};

export default Countdown;
