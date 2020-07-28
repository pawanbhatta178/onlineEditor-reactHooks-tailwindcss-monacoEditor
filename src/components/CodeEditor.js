import React, { useState, useRef, useEffect, useContext } from "react";
import Editor from "@monaco-editor/react";
import Compiler from "./Compiler";
import DropdownMenu from "./DropdownMenu";
import Theme from "./Theme";
import UserContext from "../UserContext";

const CodeEditor = () => {
  const { question } = useContext(UserContext);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const valueGetter = useRef();
  const [code, setCode] = useState(`/*
  your code goes here...
  */ `);
  const [langType, setLangType] = useState("node");
  const [themeType, setThemeType] = useState("vs-light");
  const [compilerStyle, setCompilerStyle] = useState(
    " h-32 flex bg-white justify-center overflow-auto border rounded-lg"
  );

  const editorDidMount = (_valueGetter) => {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  };

  useEffect(() => {
    if (themeType === "dark") {
      setCompilerStyle(
        " h-32 flex bg-gray-900 justify-center overflow-auto border rounded-lg text-gray-200"
      );
    } else {
      setCompilerStyle(
        " h-32 flex bg-gray-200 justify-center overflow-auto border rounded-lg"
      );
    }
  }, [themeType]);

  useEffect(() => {
    setCode(question?.startingCodeJS);
  }, [question]);

  const handleLangChange = (event) => {
    setLangType(event.target.value);
  };

  const setDarkTheme = () => {
    setThemeType("dark");
  };

  const setLightTheme = () => {
    setThemeType("vs-light");
  };

  const runCode = () => {
    setIsCodeRunning(true);
    console.log("running");
  };

  const getLanguageTypeUtil = (languageOtherName) => {
    if (languageOtherName === "node") {
      return "javascript";
    }
    return languageOtherName;
  };

  const options = {
    selectOnLineNumbers: true,
  };

  return (
    <div className="px-4 bg-gray-200 w-7/12 h-full pt-1 pb-4 border-r ">
      <div className="bg-gray-200 flex justify-between items-center text-blue-700">
        <Theme
          themeType={themeType}
          setDarkTheme={setDarkTheme}
          setLightTheme={setLightTheme}
        />
        <DropdownMenu langType={langType} handleChange={handleLangChange} />
      </div>
      <div className=" mt-3 w-full mb-2 ">
        <Editor
          height="70vh"
          language={getLanguageTypeUtil(langType)}
          value={code}
          options={options}
          theme={themeType}
          editorDidMount={editorDidMount}
        />
      </div>

      <div className={compilerStyle}>
        {!isCodeRunning ? (
          <button
            className="bg-transparent hover:bg-blue-900 text-blue-700 font-semibold hover:text-gray-200 py-2 px-10 my-10 border border-blue-500 shadow hover:border-transparent rounded-lg"
            onClick={runCode}
            disabled={!isEditorReady && isCodeRunning}
          >
            Run Code
          </button>
        ) : (
          <Compiler
            code={valueGetter.current()}
            setIsCodeRunning={setIsCodeRunning}
            langType={langType}
          />
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
