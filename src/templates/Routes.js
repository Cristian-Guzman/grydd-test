import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  
  return (
    <BrowserRouter>
            {/* <NavBar /> */}
            
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="auth" element={<Athentication />} />             
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
  );
};