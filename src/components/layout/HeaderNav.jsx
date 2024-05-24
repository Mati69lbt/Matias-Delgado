// cspell: ignore Matias

import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <header className="bg-white p-4 shadow-md ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-6xl font-bold ml-10">MD</span>
          <h3 className="text-xl font-medium w-1">Matias Delgado</h3>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/inicio"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold"
                    : "text-gray-600 hover:bg-gray-200 p-2 rounded"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portafolio"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold"
                    : "text-gray-600 hover:bg-gray-200 p-2 rounded"
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
                    ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold"
                    : "text-gray-600 hover:bg-gray-200 p-2 rounded"
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
                    ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold"
                    : "text-gray-600 hover:bg-gray-200 p-2 rounded"
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
                    ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold"
                    : "text-gray-600 hover:bg-gray-200 p-2 rounded"
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
