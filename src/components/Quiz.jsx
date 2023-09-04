import React, { useReducer } from "react";
import { useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";

const initialState = {
  questions: [],
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "error":
      return { ...state, status: "error" };
    default:
      throw new Error("invalid action type");
  }
};

const Quiz = () => {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  // const { questions, status } = state;
  useEffect(() => {
    fetch("http://localhost:3001/questions")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "dataReceived", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "error" });
      });
  }, []);

  return (
    <main className="app">
      <p>Quizzy</p>
      <p>Question x of y</p>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
    </main>
  );
};

export default Quiz;
