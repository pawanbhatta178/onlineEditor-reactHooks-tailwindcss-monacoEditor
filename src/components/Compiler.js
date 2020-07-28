import React, { useState, useEffect, useContext } from "react";
import LoadingSpinner from "./LoadingSpinner";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import UserContext from "../UserContext";
import TestCases from "./TestCases";
function Compiler({ code, setIsCodeRunning, langType }) {
  const [compiling, setCompiling] = useState(true);
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const { question } = useContext(UserContext);
  useEffect(() => {
    axios
      .post(`https://codenull-bs3rtg43lq-ue.a.run.app`, {
        code,
        langType,
        questionId: question?.questionId,
      })
      .then(({ data }) => {
        setResult(data);
        setCompiling(false);
      })
      .catch((err) => console.log(err));
  }, [code]);

  return (
    <div className="relative w-full p-2">
      <CloseIcon
        className="absolute top-0 right-0 cursor-pointer"
        onClick={() => setIsCodeRunning(false)}
      />
      <div className="my-4 py-4 flex items-center justify-center h-full">
        {compiling ? (
          <LoadingSpinner />
        ) : result ? (
          <TestCases result={result} />
        ) : (
          error
        )}
      </div>
    </div>
  );
}

export default Compiler;
