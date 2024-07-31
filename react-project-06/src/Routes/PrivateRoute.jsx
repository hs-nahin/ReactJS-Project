import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  }

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
 * 5. Handle Loading
 */
