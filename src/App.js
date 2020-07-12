import React from "react";
import CodeEditor from "./components/CodeEditor";
import Question from "./components/Question";
function App() {
  return (
    <>
      <div className="bg-blue-900 px-4 py-2 text-xl font-bold text-gray-100">
        Code: NULL
      </div>
      <div className="flex">
        <CodeEditor />
        <Question />
      </div>
    </>
  );
}

export default App;
