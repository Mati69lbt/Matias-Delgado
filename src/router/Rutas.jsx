import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "../components/Inicio";
import Portafolio from "../components/Portafolio";
import Servicios from "../components/Servicios";
import Curriculum from "../components/Curriculum";
import Contacto from "../components/Contacto";
import HeaderNav from "../components/layout/HeaderNav";
import Footer from "../components/layout/Footer";

const Rutas = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegacion */}
      <HeaderNav />
      {/* Contenido Central */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
