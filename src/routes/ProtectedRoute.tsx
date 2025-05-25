import Layout from "@/Layouts/Layout";
import { useUserStore } from "@/stores/auth";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isAuth = localStorage.getItem("token");

  return <Layout>{isAuth ? <Outlet /> : <Navigate to="/" />}</Layout>;
}

export default ProtectedRoute;
