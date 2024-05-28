// cspell: ignore Matias, Swal, sweetalert2

import { NavLink } from "react-router-dom";
import Download from "../Download";
import Swal from "sweetalert2";
import pdfFile from "../../download/MatiasDelgadoCV24.pdf";

const HeaderNav = () => {
  const handleDownloadClick = (event) => {
    event.preventDefault();

    Swal.fire({
      title: "¿Quieres descargar mi curriculum?",
      text: "Gracias por ver mi pagina web",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Si, descargar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Usar require para obtener la ruta del archivo PDF en src
        const link = document.createElement("a");
        link.href = pdfFile;
        link.setAttribute("download", "MatiasDelgadoCV24.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  return (
    <header className="bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <NavLink to="/home">
          <div className="flex flex-col  md:flex-row space-y-2  md:space-x-4 ">
            <span className="text-6xl font-bold">MD</span>
            <h3 className="text-xl font-medium w-1">Matias Delgado</h3>
          </div>
        </NavLink>
        <nav className="mt-4 md:mt-0 md:ml-auto">
          <ul className="grid grid-cols-2 gap-4 md:flex md:space-x-4 md:space-y-0">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
                    : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inicio"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
                    : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
                }
              >
                Sobre Mi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portafolio"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
                    : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
                }
              >
                Portafolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/curriculum"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
                    : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
                }
              >
                Curriculum
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicios"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
                    : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
                }
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
                    : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
                }
              >
                Contacto
              </NavLink>
            </li>
            <li>
              <a href="#" onClick={handleDownloadClick}>
                <Download className="text-gray-600 hover:bg-gray-200 p-2 rounded text-xl cursor-pointer" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
