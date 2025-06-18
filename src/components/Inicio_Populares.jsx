import React from 'react';
import PropTypes from 'prop-types';

const TarjetaPaquete = ({ paquete }) => {
  return (
    <article className="bg-white rounded-lg p-6 relative transition-shadow duration-300">
      <img
        src={`https://flagcdn.com/w80/${paquete.bandera}.png`}
        alt={`Bandera de ${paquete.titulo}`}
        className="absolute top-2 left-2 w-[50px] h-[50px] rounded-full border border-gray-200"
      />

      <img
        src={paquete.imagen}
        alt={paquete.altText}
        className="w-full h-73 object-cover rounded-3xl mb-4"
      />

      <h3 className="text-xl font-semibold mb-2 text-gray-800">{paquete.titulo}</h3>

      <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          {paquete.fecha}
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          {paquete.lugaresDisponibles} lugares
        </div>
      </div>

      <button 
        className="w-full bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition duration-300"
        aria-label={`Más información sobre ${paquete.titulo}`}
      >
        Más información
      </button>
    </article>
  );
};

TarjetaPaquete.propTypes = {
  paquete: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    lugaresDisponibles: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    bandera: PropTypes.string.isRequired
  }).isRequired
};

const Populares = ({ paquetes = [] }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-gray-900">Paquetes populares</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {paquetes.length === 0 ? (
          <p className="col-span-full text-gray-500">No hay paquetes disponibles.</p>
        ) : (
          paquetes.map((paquete) => (
            <TarjetaPaquete key={paquete.id} paquete={paquete} />
          ))
        )}
      </div>
    </section>
  );
};


export default Populares;
