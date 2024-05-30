// cspell: ignore Proyect, ContadorCalorias, Carlorías
import { useEffect, useState } from "react";
import Proyectos from "./Proyectos";
import ProyectData from "../download/ProyectData";

const Portafolio = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setProyectos(ProyectData);
  }, []);

  return (
    <div>
      <h1 className="font-bold text-5xl p-10">Portafolio</h1>
      <div className="container mx-auto">
        {proyectos.map((proyecto, index) => (
          <Proyectos key={index} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

export default Portafolio;
