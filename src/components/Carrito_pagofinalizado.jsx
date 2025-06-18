import React from 'react';
import { useNavigate } from "react-router-dom";

const PagoFinalizado = () => {
  const navigate = useNavigate();
  
  const handleDescargarResumen = () => {
    
    alert('Descargando resumen...');
  };

  const handleVolverAlInicio = () => {
    window.location.href = '/';
  };

  const productosComprados = [
    { cantidad: 1, descripcion: 'Paquete Soñar' },
    { cantidad: 4, descripcion: 'Vuelo a Brasil' },
    { cantidad: 1, descripcion: 'Toyota Corolla (1 Día)' },
  ];

  return (
    <div className="min-h-screen bg-[#a1c8cf] flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-2xl w-full text-center">

       
        <div className="border-b pb-4 mb-6 text-left flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Pedido finalizado</h2>
          <span className="text-4xl">✈️</span>
        </div>

       
        <p className="text-xl font-medium mb-4">¡Felicitaciones! Adquiriste:</p>
        <div className="text-lg mb-6 space-y-2">
          {productosComprados.map((item, index) => (
            <p key={index}>
              <strong>x{item.cantidad}</strong> {item.descripcion}
            </p>
          ))}
        </div>

        
        <button
          onClick={handleDescargarResumen}
          className="bg-teal-800 text-white py-3 px-6 rounded-lg cursor-pointer text-lg font-medium hover:bg-teal-900 transition mb-8"
        >
          Descargar resumen
        </button>

        
        <p className="text-xl font-semibold mb-6">
          Velo te desea una experiencia inolvidable.
        </p>

       
        <button
          onClick={() => navigate("/")}
          className="bg-teal-800 text-white py-3 px-6 rounded-lg text-lg cursor-pointer font-medium hover:bg-teal-900 transition"
        >Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default PagoFinalizado;
