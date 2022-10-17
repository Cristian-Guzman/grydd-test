import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormLogin } from "../molecules/FormLogin";
import { Athentication } from "../organisms/qr-code";

export const Router = () => {
  
  return (
    <BrowserRouter>
            {/* <NavBar /> */}
            
            <Routes>
                <Route path="*" element={<FormLogin />} />
                <Route path="/" element={<FormLogin />} />
                <Route path="auth" element={<Athentication />} />             
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
  );
};