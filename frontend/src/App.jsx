import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/singin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/send" element={<SendMoney />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;