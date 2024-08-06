// cspell: ignore imagenes
import { NavLink } from "react-router-dom";
import Imagenes from "./Imagenes";

const Proyectos = ({ proyecto }) => {
  
  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">{proyecto.Title}</h2>
      <p className="mb-4">{proyecto.Description}</p>
      <div className="flex space-x-4 mb-4">
        <Imagenes imagenes={proyecto.Images} />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Tecnologías Usadas:</h3>
        <p className="text-gray-700">{proyecto.Technologies.join(" | ")}</p>
      </div>
      <div className="flex space-x-4">
        <NavLink
          to={proyecto.DeployLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Ver Proyecto
        </NavLink>
        <NavLink
          to={proyecto.GithubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Ver en GitHub
        </NavLink>
        {proyecto.GithubBack && (
          <NavLink
            to={proyecto.GithubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ver Backend
          </NavLink>
        )}
      </div>
      <p className="text-right">{proyecto.Date}</p>
    </div>
  );
};

export default Proyectos;
