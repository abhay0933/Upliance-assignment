import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"; // Import Navigate
import { auth } from "./firebase/firebase";
import Home from "./components/Home";
import SignupPage from "./components/SignUp";
import LoginPage from "./components/LogIn";
import theme from "./theme/theme";

function App() {

  // const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userinfo) => {
      if (userinfo) {
        // If the user is logged in, navigate to the home page
        // window.location.replace('/home'); 
      }
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
