import React, { useState } from "react";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Rust from "./pages/Rust";
import Main from "./pages/Main";
import Scab from "./pages/Scab";
import Multiple from "./pages/Multiple";
import Healthy from "./pages/Healthy";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rust" element={<Rust />} />
        <Route path="/scab" element={<Scab />} />
        <Route path="/healthy" element={<Healthy />} />
        <Route path="/multiple" element={<Multiple />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
