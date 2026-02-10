import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import Loader from "../components/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return (
      <Navigate to="/register" state={{ from: location.pathname }} replace />
    );
  }

  return children;
};

export default PrivateRoute;
