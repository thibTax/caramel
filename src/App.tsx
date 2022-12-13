import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";
import NavBar from "./components/nav-bar";
import CarList from "./pages/car-list";
import CarDetails from "./pages/car-details";
import PrivateRoutes from "./PrivateRoutes";
import "./App.css";
import Visitors from "./pages/visitors";

function App() {
  return (
    <div>
      {/* <NavBar /> */}

      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<CarList />} />
            <Route path="/carlist" element={<CarList />} />
            <Route path="/carlist/:id" element={<CarDetails id={""} />} />
          </Route>
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
