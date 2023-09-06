import React from "react";

const StartScreen = (
  { numQuestions, dispatch } // props
) => {
  return (
    <div className="start">
      <h2>Quiz</h2>
      <h3>{numQuestions} Questions to test your knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Start
      </button>
    </div>
  );
};

export default StartScreen;
