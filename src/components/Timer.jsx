import React, { useEffect, Fragment } from "react";
import { Typography } from "@material-ui/core";

const Timer = ({
  hours,
  minutes,
  seconds,
  setHours,
  setMinutes,
  setSeconds,
  started,
  paused,
  setStarted,
  setFinished,
}) => {
  useEffect(() => {
    if (paused === true && started) {
      const myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              setStarted(false);
              setFinished(true);
              clearInterval(myInterval);
            } else {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);

      return () => clearInterval(myInterval);
    }
  }, [
    hours,
    minutes,
    paused,
    seconds,
    setFinished,
    setHours,
    setMinutes,
    setSeconds,
    setStarted,
    started,
  ]);

  return (
    <Fragment>
      <Typography variant="h2" className="timer-display">
        {hours < 10 ? `0${hours}` : hours}
        <span className="timer-display__separator">:</span>
        {minutes < 10 ? `0${minutes}` : minutes}
        <span className="timer-display__separator">:</span>
        {seconds < 10 ? `0${seconds}` : seconds}
      </Typography>
    </Fragment>
  );
};

export default Timer;
