import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";
import NavBar from "./components/nav-bar";
import CarList from "./pages/car-list";
import CarDetails from "./pages/car-details";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/carlist" element={<CarList />} />
          <Route path="/carlist/:id" element={<CarDetails id={""} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
