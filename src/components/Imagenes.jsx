// cspell: ignore imagenes
import { useState } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Modal from "react-modal";
Modal.setAppElement("#root"); // C

const Imagenes = ({ imagenes }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imagen) => {
    setSelectedImage(imagen);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };
  return (
    <div>
      <Carousel
        showThumbs={true}
        showStatus={true}
        showIndicators={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        interval={3000}
        centerMode={true}
        className="bg-slate-100 rounded-xl"
      >
        {imagenes.map((imagen, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center"
          >
            <img
              src={imagen}
              alt={`imagen-${index}`}
              className="w-full h-auto max-w-screen-md max-h-96 object-contain mx-auto p-4"
            />
            <button
              onClick={() => openModal(imagen)}
              className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-2"
            >
              🔍
            </button>
          </div>
        ))}
      </Carousel>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagen Modal"
        className="flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
      >
        <div className="relative bg-white p-4 rounded-lg max-w-full max-h-full">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 text-xl"
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Imagen en Modal"
            className="w-full h-auto max-h-[80vh] object-contain mx-auto"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Imagenes;
