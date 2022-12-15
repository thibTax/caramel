import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthenticationService from "./services/authentification-service";

const PrivateRoute = () => {
  const isAuthenticated = AuthenticationService.isAuthenticated;
  return isAuthenticated ? <Outlet /> : <Navigate to="/visitors" />;
};

export default PrivateRoute;
