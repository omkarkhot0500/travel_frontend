import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import './App.css';
import TouristAttractions from "./pages/Explore/Explore";

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/SignUp" exact element={<SignUp />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div>{routes}</div>;
};

export default App;
