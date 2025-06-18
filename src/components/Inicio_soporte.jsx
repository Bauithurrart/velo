import React from 'react';
import contacto from "../assets/contacto.jpeg";

const Soporte = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${contacto})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight text-balance mb-8 drop-shadow-lg">
          Te brindamos el mejor asesoramiento personalizado,
          <br />
          no dudes en contactarnos.
        </h1>

        <button 
          className="bg-slate-800 cursor-pointer hover:bg-slate-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500"
          aria-label="Contactar a soporte"
        >
          Soporte
        </button>
      </div>
    </section>
  );
};

export default Soporte;