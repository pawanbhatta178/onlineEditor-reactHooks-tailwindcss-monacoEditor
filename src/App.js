import React, { useState, useEffect } from "react";
import CodeEditor from "./components/CodeEditor";
import Question from "./components/Question";
import UserContext from "./UserContext";
import { useQuery, gql } from "@apollo/client";
import getISODate from "./util/getIsoDate";

const GETQUESTION = gql`
  query QuestionSpQuery($questionId: String!) {
    getQuestion(questionId: $questionId) {
      questionId
      questionTitle
      questionPrompt
      sampleInput
      sampleOutput
      startingCodeJS
    }
  }
`;

function App() {
  const [login, setLogin] = useState("None");
  const [datePicker, setDatePicker] = useState(getISODate());
  const [question, setQuestion] = useState({
    questionId: "",
    questionTitle: "",
    questionPrompt: "",
    sampleInput: "",
    sampleOutput: "",
    difficulty: "",
    startingCodeJS: "",
  });
  const { loading, error, data } = useQuery(GETQUESTION, {
    variables: { questionId: datePicker },
  });

  useEffect(() => {
    console.log(data);
    setQuestion(data?.getQuestion);
  }, [data]);

  return (
    <>
      <div className="bg-blue-900 px-4 py-2 text-xl font-bold text-gray-100">
        Code: NULL
      </div>
      <UserContext.Provider
        value={{ login, setLogin, question, datePicker, setDatePicker }}
      >
        <div className="flex h-screen">
          <CodeEditor />
          <Question />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
