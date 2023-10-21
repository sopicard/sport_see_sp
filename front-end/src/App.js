import React from "react";
import AppRouter from "./AppRouter";
import NavTop from "./components/NavTop";
import NavLeft from "./components/NavLeft";

function App() {
  return (
    <div className="main-container">
      <NavTop/>
      <NavLeft/>
      <AppRouter/>
    </div>
  );
}

export default App;

