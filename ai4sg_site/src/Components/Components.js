import React from "react";
import MainModule from "./Main/Main.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import header
import { Header } from "./Header.js";

const Components = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainModule />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Components;
