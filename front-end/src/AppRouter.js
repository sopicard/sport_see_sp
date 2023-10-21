import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
