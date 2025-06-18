import React from 'react';
 import fondoArgentina from '../assets/argentina.webp';
import fondoInternacional from '../assets/internacional.webp';
import { useNavigate } from "react-router-dom";

const TarjetaDestino = ({ imagenFondo, titulo, subtitulo }) => {
  return (
    <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center overflow-hidden text-white">
      <div
        className="bg-cover bg-center w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:bg-opacity-70"
        style={{ backgroundImage: `url(${imagenFondo})` }}
      >
        <h2 className="text-6xl font-bold">{titulo}</h2>
        <p className="text-xl">{subtitulo}</p>
      </div>
    </div>
  );
};

const PrePaquetes = () => {
  const navigate = useNavigate();
  return (
    <nav onClick={() => navigate("/Paquetes")} className=" m-10 mt-50 mb-50 flex flex-col md:flex-row h-56 rounded-1xl">
      <TarjetaDestino
        imagenFondo={fondoArgentina}
        titulo="Argentina"
        subtitulo="PAQUETES"
      />
      <TarjetaDestino
        imagenFondo={fondoInternacional}
        titulo="Internacional"
        subtitulo="PAQUETES"

      />
    </nav>
  );
};

export default PrePaquetes;