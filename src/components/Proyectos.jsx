const Proyectos = ({ proyecto }) => {
  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">{proyecto.Title}</h2>
      <p className="mb-4">{proyecto.Description}</p>
      <div className="flex space-x-4 mb-4">
        {proyecto.Images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${proyecto.Title} screenshot ${index + 1}`}
            className="w-1/3 h-auto object-cover rounded-lg"
          />
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={proyecto.DeployLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Ver Proyecto
        </a>
        <a
          href={proyecto.GithubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  );
};

export default Proyectos;
