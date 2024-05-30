// cspell: ignore imagenes
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Imagenes = ({ imagenes }) => {
  return (
    <Carousel
      showThumbs={true}
      showStatus={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      interval={3000}
      centerMode={true}
      className="bg-slate-100 rounded-xl"
    >
      {imagenes.map((imagen, index) => {
        return (
          <div key={index} className="flex justify-center items-center">
            <img
              src={imagen}
              alt={`imagen-${index}`}
              className="w-full h-auto max-w-screen-md max-h-96 object-contain mx-auto p-4"
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Imagenes;
