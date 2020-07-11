import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

function Compiler({ code, setIsCodeRunning, langType }) {
  const [compiling, setCompiling] = useState(true);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios.post(`http://localhost:9000`, { code, langType }).then(({ data }) => {
      if (data.stderr) {
        setError(data.stderr);
      } else {
        setResult(data.stdout);
      }
      setCompiling(false);
    });
  }, [code]);

  return (
    <div className="relative w-full p-2">
      <CloseIcon
        className="absolute top-0 right-0"
        onClick={() => setIsCodeRunning(false)}
      />
      <div className=" flex items-center justify-center h-full">
        {compiling ? <LoadingSpinner /> : result ? result : error}
      </div>
    </div>
  );
}

export default Compiler;
