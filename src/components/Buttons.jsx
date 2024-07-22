import React, { Fragment } from "react";
import { Button } from "@material-ui/core";

const Buttons = ({
  started,
  paused,
  finished,
  handleStart,
  handlePause,
  handleReset,
}) => {
  if (started) {
    return (
      <Fragment>
        <Button
          variant="contained"
          color="default"
          onClick={handlePause}
          disableElevation
        >
          {paused ? "Pause" : "Resume"}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleReset}
          disableElevation
        >
          Reset
        </Button>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        onClick={finished ? handleReset : handleStart}
        disableElevation
      >
        {finished ? "START AGAIN" : "Start"}
      </Button>
    </Fragment>
  );
};

export default Buttons;
