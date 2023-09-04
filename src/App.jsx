import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
// import Main from "./components/Main.jsx";
import Quiz from "./components/Quiz.jsx";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      <Quiz />
    </>
  );
}

export default App;
