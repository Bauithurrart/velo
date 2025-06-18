import React from 'react';
import Paisaje from '../assets/ushuaia.webp';
import { useNavigate } from "react-router-dom";

const ExploraPaquetes = () => {
  const navigate = useNavigate();
  
  return (
    <main 
      className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center"
      style={{ backgroundImage: `url(${Paisaje})` }}
    >
      <div className="container mx-auto mt-[23rem] px-3 text-white">
        <div className="mb-2">
          <h2 className="text-2xl md:text-3xl tracking-wide">
            ¿No te decides a dónde ir?
          </h2>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-wide leading-tight font-bold">
            Explora todos los <br /> paquetes
          </h1>
        </div>

        <div className='cursor-pointer'>
          <a onClick={() => navigate("/Paquetes")}className="inline-block bg-gray-300 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105" aria-label="Ver paquetes disponibles">
            Visitar nuestros paquetes disponibles
          </a>
        </div>
      </div>
    </main>
  );
};

export default ExploraPaquetes;