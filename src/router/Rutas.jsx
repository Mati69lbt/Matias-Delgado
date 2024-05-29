import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "../components/Inicio";
import Portafolio from "../components/Portafolio";
import Servicios from "../components/Servicios";
import Curriculum from "../components/Curriculum";
import Contacto from "../components/Contacto";
import HeaderNav from "../components/layout/HeaderNav";
import Footer from "../components/layout/Footer";
import Home from "../components/Home";

const Rutas = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegación */}
      <HeaderNav />
      {/* Contenido Central */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
