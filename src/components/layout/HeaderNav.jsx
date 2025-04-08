// // // // cspell: ignore Matias, Swal, sweetalert2

// // // import { NavLink } from "react-router-dom";
// // // import Download from "../Download";
// // // import Swal from "sweetalert2";
// // // import pdfFile from "../../download/MDelgadoJ24.pdf";
// // // import { useState } from "react";

// // // const HeaderNav = () => {
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   const handleDownloadClick = (event) => {
// // //     event.preventDefault();

// // //     Swal.fire({
// // //       title: "¿Quieres descargar mi curriculum?",
// // //       text: "Gracias por visitar mi pagina web",
// // //       icon: "question",
// // //       showCancelButton: true,
// // //       confirmButtonColor: "#3085d6",
// // //       cancelButtonColor: "#d33",
// // //       cancelButtonText: "No",
// // //       confirmButtonText: "Si, descargar",
// // //     }).then((result) => {
// // //       if (result.isConfirmed) {
// // //         // Usar require para obtener la ruta del archivo PDF en src
// // //         const link = document.createElement("a");
// // //         link.href = pdfFile;
// // //         link.setAttribute("download", "MatiasDelgado.pdf");
// // //         document.body.appendChild(link);
// // //         link.click();
// // //         document.body.removeChild(link);
// // //       }
// // //     });
// // //   };

// // //   return (
// // //     <header className="bg-white p-4 shadow-md">
// // //       <div className="flex items-center justify-between">
// // //         <NavLink to="/home">
// // //           <div className="flex flex-col  md:flex-row space-y-2  md:space-x-4 ">
// // //             <span className="text-6xl font-bold">MD</span>
// // //             <h3 className="text-xl font-medium w-1">Matias Delgado</h3>
// // //           </div>
// // //         </NavLink>
// // //         <nav className="mt-4 md:mt-0 md:ml-auto">
// // //           <ul className="grid grid-cols-2 gap-4 md:flex md:space-x-4 md:space-y-0">
// // //             <li>
// // //               <NavLink
// // //                 to="/home"
// // //                 className={({ isActive }) =>
// // //                   isActive
// // //                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
// // //                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
// // //                 }
// // //               >
// // //                 Inicio
// // //               </NavLink>
// // //             </li>
// // //             <li>
// // //               <NavLink
// // //                 to="/inicio"
// // //                 className={({ isActive }) =>
// // //                   isActive
// // //                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
// // //                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
// // //                 }
// // //               >
// // //                 Sobre Mi
// // //               </NavLink>
// // //             </li>
// // //             <li>
// // //               <NavLink
// // //                 to="/portafolio"
// // //                 className={({ isActive }) =>
// // //                   isActive
// // //                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
// // //                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
// // //                 }
// // //               >
// // //                 Portafolio
// // //               </NavLink>
// // //             </li>
// // //             <li>
// // //               <NavLink
// // //                 to="/servicios"
// // //                 className={({ isActive }) =>
// // //                   isActive
// // //                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
// // //                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
// // //                 }
// // //               >
// // //                 Servicios
// // //               </NavLink>
// // //             </li>
// // //             <li>
// // //               <NavLink
// // //                 to="/contacto"
// // //                 className={({ isActive }) =>
// // //                   isActive
// // //                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
// // //                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
// // //                 }
// // //               >
// // //                 Contacto
// // //               </NavLink>
// // //             </li>
// // //             <li>
// // //               <a href="#" onClick={handleDownloadClick}>
// // //                 <Download className="text-gray-600 hover:bg-gray-200 p-2 rounded text-xl cursor-pointer" />
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </nav>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default HeaderNav;


// // // // // -------------------------------------------------------

// // import { useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import Download from "../Download";
// // import Swal from "sweetalert2";
// // import pdfFile from "../../download/MDelgadoJ24.pdf";

// // const HeaderNav = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const handleDownloadClick = (event) => {
// //     event.preventDefault();

// //     Swal.fire({
// //       title: "¿Quieres descargar mi curriculum?",
// //       text: "Gracias por visitar mi pagina web",
// //       icon: "question",
// //       showCancelButton: true,
// //       confirmButtonColor: "#3085d6",
// //       cancelButtonColor: "#d33",
// //       cancelButtonText: "No",
// //       confirmButtonText: "Si, descargar",
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         const link = document.createElement("a");
// //         link.href = pdfFile;
// //         link.setAttribute("download", "MatiasDelgado.pdf");
// //         document.body.appendChild(link);
// //         link.click();
// //         document.body.removeChild(link);
// //       }
// //     });
// //   };

// //   return (
// //     <header className="bg-white p-4 shadow-md">
// //       <div className="flex items-center justify-between">
// //         <NavLink to="/home">
// //           <div className="flex flex-col md:flex-row space-y-2 md:space-x-4">
// //             <span className="text-6xl font-bold">MD</span>
// //             <h3 className="text-xl font-medium w-1">Matias Delgado</h3>
// //           </div>
// //         </NavLink>
// //         <div className="md:hidden">
// //           <button
// //             onClick={() => setMenuOpen(!menuOpen)}
// //             className="text-gray-600 hover:text-gray-800 focus:outline-none"
// //           >
// //             <svg
// //               className="w-6 h-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
// //               ></path>
// //             </svg>
// //           </button>
// //         </div>
// //         <nav
// //           className={`mt-4 md:mt-0 md:ml-auto ${
// //             menuOpen ? "block" : "hidden"
// //           } md:block`}
// //         >
// //           <ul className="grid grid-cols-2 gap-4 md:flex md:space-x-4 md:space-y-0">
// //             <li>
// //               <NavLink
// //                 to="/home"
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
// //                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
// //                 }
// //               >
// //                 Inicio
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/inicio"
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
// //                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
// //                 }
// //               >
// //                 Sobre Mi
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/portafolio"
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
// //                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
// //                 }
// //               >
// //                 Portafolio
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/servicios"
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
// //                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
// //                 }
// //               >
// //                 Servicios
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/contacto"
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
// //                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
// //                 }
// //               >
// //                 Contacto
// //               </NavLink>
// //             </li>
// //             <li>
// //               <a href="#" onClick={handleDownloadClick}>
// //                 <Download className="text-gray-600 hover:bg-gray-200 p-2 rounded text-xl cursor-pointer" />
// //               </a>
// //             </li>
// //           </ul>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default HeaderNav;


// // // // // ----------------------------------------------

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import Download from "../Download";
// import Swal from "sweetalert2";
// import pdfFile from "../../download/MDelgadoJ24.pdf";

// const HeaderNav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleDownloadClick = (event) => {
//     event.preventDefault();

//     Swal.fire({
//       title: "¿Quieres descargar mi curriculum?",
//       text: "Gracias por visitar mi pagina web",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       cancelButtonText: "No",
//       confirmButtonText: "Si, descargar",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const link = document.createElement("a");
//         link.href = pdfFile;
//         link.setAttribute("download", "MatiasDelgado.pdf");
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       }
//     });
//   };

//   return (
//     <header className="bg-white p-4 shadow-md">
//       <div className="flex items-center justify-between">
//         <NavLink to="/home">
//           <div className="flex flex-col md:flex-row space-y-2 md:space-x-4">
//             <span className="text-6xl font-bold">MD</span>
//             <h3 className="text-xl font-medium w-1">Matias Delgado</h3>
//           </div>
//         </NavLink>
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-600 hover:text-gray-800 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <nav
//           className={`mt-4 md:mt-0 md:ml-auto ${
//             menuOpen ? "block" : "hidden"
//           } md:block`}
//         >
//           <ul
//             className={`md:flex md:space-x-4 md:space-y-0 ${
//               menuOpen ? "flex flex-col space-y-4" : ""
//             }`}
//           >
//             <li>
//               <NavLink
//                 to="/home"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
//                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
//                 }
//               >
//                 Inicio
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/inicio"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
//                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
//                 }
//               >
//                 Sobre Mi
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/portafolio"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
//                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
//                 }
//               >
//                 Portafolio
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/servicios"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
//                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
//                 }
//               >
//                 Servicios
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contacto"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-gray-600 hover:bg-gray-200 p-2 rounded font-bold text-xl"
//                     : "text-gray-600 hover:bg-gray-200 p-2 rounded text-xl"
//                 }
//               >
//                 Contacto
//               </NavLink>
//             </li>
//             <li>
//               <a href="#" onClick={handleDownloadClick}>
//                 <Download className="text-gray-600 hover:bg-gray-200 p-2 rounded text-xl cursor-pointer" />
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default HeaderNav;


// // // // ------------------------------------

import { useState } from "react";
import { NavLink } from "react-router-dom";
import Download from "../Download";
import Swal from "sweetalert2";
import pdfFile from "../../download/MDelgadoA25.pdf"; 

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownloadClick = (event) => {
    event.preventDefault();

    Swal.fire({
      title: "¿Quieres descargar mi curriculum?",
      text: "Gracias por visitar mi pagina web",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Si, descargar",
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = pdfFile;
        link.setAttribute("download", "MatiasDelgado.pdf");
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
          <div className="flex flex-col space-y-2">
            <span className="text-6xl font-bold">MD</span>
            <h3 className="text-xl font-medium">Matias Delgado</h3>
          </div>
        </NavLink>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`mt-4 md:mt-0 md:ml-auto ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul
            className={`md:flex md:space-x-4 md:space-y-0 ${
              menuOpen ? "flex flex-col space-y-4" : ""
            }`}
          >
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
