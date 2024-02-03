import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";


function App(){
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            {/* <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/send" element={<SendMoney />} /> */}
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;