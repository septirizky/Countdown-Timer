import React from "react";
import { IconButton } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export const ArrowUp = ({ onClick }) => {
  return (
    <IconButton className="time-picker__arrow" onClick={onClick} size="small">
      <KeyboardArrowUpIcon fontSize="large" />
    </IconButton>
  );
};

export const ArrowDown = ({ onClick }) => {
  return (
    <IconButton className="time-picker__arrow" onClick={onClick} size="small">
      <KeyboardArrowDownIcon fontSize="large" />
    </IconButton>
  );
};
