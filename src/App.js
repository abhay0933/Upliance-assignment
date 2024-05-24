import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { auth } from "./firebase/firebase";
import Home from "./components/Home";
import SignupPage from "./components/SignUp";
import LoginPage from "./components/LogIn";
import theme from "./theme/theme";

const AppRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Checking auth state...");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("Auth state changed:", user);
      if (user) {
        console.log("User is signed in, navigating to /home");
          navigate("/home"); }
      // } else {
      //   console.log("User is not signed in, navigating to /signup");
      //   navigate('/signup')
      // }
    }, (error) => {
      console.error("Error checking auth state:", error);
    });

    // Clean up the subscription on component unmount
    return () => {
      console.log("Cleaning up auth state subscription...");
      unsubscribe();
    };
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
