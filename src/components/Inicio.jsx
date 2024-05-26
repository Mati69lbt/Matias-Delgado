// cspell: ignore Matías, bootcamps, MERN, contáctese

import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="m-3 sm:m-12 shadow-md rounded-md">
      <p className="mb-4 text-lg text-left sm:text-justify m-4 pt-4">
        Soy <strong>Matías Daniel Delgado</strong>, desarrollador web y móvil
        con amplios conocimientos adquiridos a través de proyectos personales y
        bootcamps intensivos. Aunque no tengo experiencia laboral formal, he
        trabajado en diversos proyectos full stack que me han permitido aplicar
        y mejorar mis habilidades en tecnologías front end como React,
        TypeScript, Tailwind CSS y Bootstrap, así como en tecnologías back end
        como Express y MongoDB, entre muchas más.
      </p>
      <p className="mb-4 text-lg text-justify m-4">
        He trabajado en numerosos proyectos, cada uno de los cuales me ha
        permitido aprender y mejorar diferentes habilidades. Algunos de mis
        proyectos más complejos son aplicaciones tipo MERN (MongoDB, Express,
        React, Node.js), que, aunque lamentablemente no puedo desplegar, me han
        brindado una sólida comprensión del desarrollo full stack. También he
        desarrollado varios proyectos enfocados en el front end, que, aunque no
        son tan complejos como los MERN, destacan por su diseño visual atractivo
        y están desplegados para ser visualizados.
      </p>
      <p className="mb-4 text-lg text-justify m-4">
        Mis objetivos profesionales a corto plazo incluyen encontrar una
        posición donde pueda aplicar mis habilidades y seguir creciendo en el
        campo del desarrollo web. A largo plazo, aspiro a contribuir
        significativamente en proyectos innovadores y desafiantes, y seguir
        desarrollándome tanto profesional como personalmente.
      </p>
      <p className="mb-4 text-lg text-justify m-4">
        Me considero un colaborador eficaz, con habilidades sólidas en trabajo
        en equipo, comunicación y resolución de problemas. Mantengo una actitud
        proactiva hacia el aprendizaje continuo, participando en cursos en línea
        y siguiendo a expertos en la industria para estar al tanto de las
        últimas tendencias.
      </p>
      <p className="mb-4 text-lg text-justify m-4 pb-4">
        Además de mi pasión por la tecnología, disfruto del ciclismo, una
        actividad que me permite explorar nuevos lugares y disfrutar de la
        naturaleza. Estas experiencias enriquecen mi perspectiva y me inspiran a
        ser creativo y resiliente en mi carrera profesional.
      </p>
      <p className="text-lg">
        Gracias por visitar mi página. Espero que haya sido de su agrado. Si es
        así,{" "}
        <Link to="/contacto" className="text-blue-500 hover:underline">
          contáctese conmigo.
        </Link>
      </p>
    </div>
  );
};

export default Inicio;
