// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { ThemeProvider } from '@/components/ThemeProviders';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './assets/style/App.css';
import AuthContextProvider from './components/auth/AuthContext';
import router from './routes';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthContextProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
