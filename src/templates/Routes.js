import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Athentication } from "../organisms/qr-code";

export const Router = () => {
  
  return (
    <BrowserRouter>
            {/* <NavBar /> */}
            
            <Routes>
                <Route path="*" element={<Athentication />} />
                <Route path="/" element={<Athentication />} />
                <Route path="auth:id" element={<Athentication />} />             
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
  );
};