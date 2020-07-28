import React, { useState } from "react";
import TestCaseUI from "./TestCaseUI";
function TestCases(props) {
  const [passedAllTests, setPassedAllTests] = useState(false);
  return (
    <div>
      {props?.result?.map((testCase) => (
        <TestCaseUI data={testCase} />
      ))}
    </div>
  );
}

export default TestCases;
