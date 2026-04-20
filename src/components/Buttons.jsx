import React from "react";
import { Button } from "@material-ui/core";

const Buttons = ({
  started,
  paused,
  finished,
  handleStart,
  handlePause,
  handleReset,
  disabledStart,
}) => {
  if (started) {
    return (
      <div className="timer-actions">
        <Button
          variant="contained"
          color="default"
          onClick={handlePause}
          disableElevation
          className="timer-button timer-button--secondary"
        >
          {paused ? "Pause" : "Resume"}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleReset}
          disableElevation
          className="timer-button timer-button--danger"
        >
          Reset
        </Button>
      </div>
    );
  }

  return (
    <div className="timer-actions">
      <Button
        variant="contained"
        onClick={finished ? handleReset : handleStart}
        disableElevation
        className="timer-button timer-button--primary"
        disabled={!finished && disabledStart}
      >
        {finished ? "START AGAIN" : "Start"}
      </Button>
    </div>
  );
};

export default Buttons;
