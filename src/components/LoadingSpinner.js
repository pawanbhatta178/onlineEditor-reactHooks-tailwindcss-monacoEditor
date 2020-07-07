import React from "react";
import { CircularProgress } from "@material-ui/core";

function LoadingSpinner() {
  return <CircularProgress color="inherit" size="2rem" thickness="6" />;
}

export default LoadingSpinner;
