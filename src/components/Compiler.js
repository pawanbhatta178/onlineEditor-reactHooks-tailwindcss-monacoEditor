import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

function Compiler({ code, setIsCodeRunning, langType }) {
  const [compiling, setCompiling] = useState(true);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .post(`https://mighty-lake-53096.herokuapp.com/`, {
        code,
        langType,
      })
      .then(({ data }) => {
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
        className="absolute top-0 right-0 cursor-pointer"
        onClick={() => setIsCodeRunning(false)}
      />
      <div className="my-4 py-4 flex items-center justify-center h-full">
        {compiling ? <LoadingSpinner /> : result ? result : error}
      </div>
    </div>
  );
}

export default Compiler;
