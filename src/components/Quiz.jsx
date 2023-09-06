import React, { useReducer } from "react";
import { useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "error":
      return { ...state, status: "error" };
    case "active":
      return { ...state, status: "active" };

    default:
      throw new Error("invalid action type");
  }
};

const Quiz = () => {
  useEffect(() => {
    // fetch("http://localhost:3001/questions")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     dispatch({ type: "dataReceived", payload: data });
    //   })
    //   .catch((error) => {
    //     dispatch({ type: "error" });
    //   });
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3001/questions");
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "error" });
      }
    };
    fetchQuestions();
  }, []);

  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  return (
    <main className="app">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <Questions questions={questions} dispatch={dispatch} index={index} />
      )}
    </main>
  );
};

export default Quiz;
