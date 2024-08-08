// cspell: ignore Proyect, ContadorCalorias, Calorías
import { useEffect, useRef, useState } from "react";
import Proyectos from "./Proyectos";
import ProyectData from "../download/ProyectData";
import ReactPaginate from "react-paginate";
import { sortProjects } from "./helper/sortProyectos";

const Portafolio = () => {
  const [proyectos, setProyectos] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const proyectos_Por_Pagina = 5;  

  const sortedProjects = sortProjects(proyectos);
  
  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const firstProjectRef = useRef(null);

  useEffect(() => {
    setProyectos(ProyectData);
  }, []);

  const offset = currentPage * proyectos_Por_Pagina;
  const proyectosFiltrados = sortedProjects.slice(
    offset,
    offset + proyectos_Por_Pagina
  );

  const handle_Page_Click = ({ selected }) => {
    setCurrentPage(selected);
    if (firstProjectRef.current) {
      firstProjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <style>
        {`
          .pagination {
            display: flex;
            justify-content: center;
            padding: 1rem;
          }
          .page-item {
            margin: 0 0.25rem;
          }
          .page-link {
            padding: 0.5rem 1rem;
            border: 1px solid #ddd;
            cursor: pointer;
            color: #007bff;
            text-decoration: none;
          }
          .page-link:hover {
            background-color: #f1f1f1;
          }
          .active .page-link {
            background-color: #007bff;
            color: white;
            border-color: #007bff;
          }
             @media (max-width: 600px) {
            .page-link {
              padding: 0.3rem 0.6rem;
              font-size: 0.875rem;
            }
            .page-item {
              margin: 0.15rem;
            }
        `}
      </style>

      <h1 className="font-bold text-5xl p-10">Portafolio</h1>
  
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(proyectos.length / proyectos_Por_Pagina)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handle_Page_Click}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        forcePage={currentPage}
      />

      <div className="container mx-auto">
        {proyectosFiltrados.map((proyecto, index) => (
          <div key={index} ref={index === 0 ? firstProjectRef : null}>
            <Proyectos proyecto={proyecto} />
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(proyectos.length / proyectos_Por_Pagina)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handle_Page_Click}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        forcePage={currentPage}
      />
    </div>
  );
};

export default Portafolio;
