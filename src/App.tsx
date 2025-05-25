// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
import "./assets/style/App.css";
import UserList from "./components/UserList";
import { AuthProvider } from "./contexts/auth";
import Home from "./routes/Home";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/ThemeProviders";
import AuthContextProvider from "./components/auth/AuthContext";
import toast, { Toaster } from "react-hot-toast";
interface User {
  id: number;
  username: string;
  phone: string;
  email: string;
}

const notify = () => toast.success("JAWA JAWA JAWA JAWA.");
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthContextProvider>
          <RouterProvider router={router} />
          <Toaster position="bottom-right" />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
