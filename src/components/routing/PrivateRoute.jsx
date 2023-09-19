import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Spinner from "../layout/Spinner";

function PrivateRoute({ component: Component }) {
  const { loading, isAuthenticated } = useSelector((state) => state.auth);
  return loading ? (
    <Spinner />
  ) : isAuthenticated ? (
    Component
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
