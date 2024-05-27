// cspell: ignore Matias

import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col  md:flex-row space-y-2  md:space-x-4 ">
          <span className="text-6xl font-bold">MD</span>
          <h3 className="text-xl font-medium w-1">Matias Delgado</h3>
        </div>
        <nav className="mt-4 md:mt-0 md:ml-auto">
          <ul className="grid grid-cols-2 gap-4 md:flex md:space-x-4 md:space-y-0">
            <li>
              <NavLink
                to="/inicio"
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
              <span className="text-gray-600 hover:bg-gray-200 p-2 rounded text-xl cursor-pointer">
                CV
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
