import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import CloseIcon from "@material-ui/icons/Close";

function Compiler({ code, setIsCodeRunning }) {
  const [compiling, setCompiling] = useState(true);

  useEffect(() => console.log("Running Useeffect"), []);
  return (
    <div className="relative w-full p-2">
      <CloseIcon
        className="absolute top-0 right-0"
        onClick={() => setIsCodeRunning(false)}
      />
      <div className=" flex items-center justify-center h-full">
        {compiling ? <LoadingSpinner /> : "Done!"}
      </div>
    </div>
  );
}

export default Compiler;
