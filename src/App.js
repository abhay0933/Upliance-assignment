import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignupPage from "./components/SignUp";
import LoginPage from "./components/LogIn";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme= {theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignupPage />} />
          <Route path='/home' element={<Home />} />
          <Route path="/login" element= {<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
