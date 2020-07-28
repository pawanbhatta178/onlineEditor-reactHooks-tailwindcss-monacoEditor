import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CancelIcon from "@material-ui/icons/Cancel";

function TestCaseUI({ data }) {
  return (
    <div className="flex">
      <div className="font-semibold px-10">
        {data.testPassed ? <CheckCircleOutlineIcon /> : <CancelIcon />}
      </div>
      <div className="pr-4">
        <span className="font-medium">Expected: </span> {data.expectedOutput}
      </div>
      <div className="pr-4">
        <span className="font-medium">Result: </span>
        {data.stderr ? "ERROR" : data.stdout}
      </div>
    </div>
  );
}

export default TestCaseUI;
