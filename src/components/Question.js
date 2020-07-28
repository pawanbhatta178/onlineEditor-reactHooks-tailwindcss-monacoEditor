import React, { useContext } from "react";
import UserContext from "../UserContext";

import DatePicker from "./DatePicker";
function Question() {
  const { question } = useContext(UserContext);
  return (
    <div className="h-screen overflow-hidden w-5/12 bg-gray-200 text-blue-900">
      <DatePicker />
      <div className=" h-full pb-12 mb-6 pl-6 pr-6 justify-between mx-4 overflow-y-scroll bg-gray-200 border-t-2 rounded-lg shadow">
        <div className="flex justify-evenly pt-4">
          <div className="m-4 md:text-4xl text-2xl font-medium">
            {question?.questionTitle}
          </div>{" "}
          <div className="my-4 max-h-15 font-thin text-sm inline flex-col items-center justify-center rounded-lg ">
            <div className="bg-blue-800 text-gray-200 border border-blue-800 shadow rounded">
              {" "}
              Difficulty
            </div>
            <div className="flex justify-center bg-gray-200 text-indigo-900 border border-blue-800 rounded-lg">
              {question?.difficulty === "Easy" ? (
                <div className="font-semibold">EASY</div>
              ) : (
                <div className="font-semibold">HARD</div>
              )}
            </div>
          </div>
        </div>

        <div className=" my-6">{question?.questionPrompt}</div>
        <div className=" my-4 font-medium">
          Sample Input:
          <div className="border rounded-lg p-2 bg-white font-body ">
            {question?.sampleInput}
          </div>
        </div>
        <div className="my-4 pb-12 font-medium">
          Sample Output:
          <div className="border rounded-lg  p-2 bg-white font-body ">
            {question?.sampleOutput}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
