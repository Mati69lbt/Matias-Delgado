import { useEffect, useState } from "react";
import proyectosData from "../download/projects.json";
import Proyectos from "./Proyectos";

const Portafolio = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setProyectos(proyectosData);
  }, []);

  return (
    <div>
      <h1 className="font-bold text-5xl p-10">Portafolio</h1>;
      <div className="container mx-auto">
        {proyectos.map((proyecto, index) => (
          <Proyectos key={index} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

export default Portafolio;
