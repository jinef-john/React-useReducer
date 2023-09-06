import React from "react";

const Questions = (
  { questions, dispatch, index, numQuestions } // props
) => {
  return (
    <div className="">
      <h4>{questions[index].question}</h4>
    </div>
  );
};

export default Questions;
