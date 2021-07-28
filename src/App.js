import React from "react";
import "./css/style.scss";
import Routes from "./routes";
import AlertTemplate from "react-alert-template-basic";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

function App() {
  return (
    <>
      <AlertProvider template={AlertTemplate} {...options}>
        <Routes></Routes>
      </AlertProvider>
    </>
  );
}

export default App;
