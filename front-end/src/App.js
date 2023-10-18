import React from "react";
import NavTop from "./components/NavTop";
import NavLeft from "./components/NavLeft";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="main-container">
      <NavTop/>
      <NavLeft/>
      <Router>
        <Routes>
          <Route path="/user/:id" element={<Header/>} />
        </Routes>
      </Router>
      {/* Vos composants ici */}
    </div>
  );
}

export default App;

