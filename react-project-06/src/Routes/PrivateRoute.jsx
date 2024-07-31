import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;

/**
 * Steps
 * 1. Check User is Logged In or not
 * 2. If user is logged in then allow them to visit the route
 * 3. Else redirect the user to the LogIn page
 * 4. Setup the private router
 */
