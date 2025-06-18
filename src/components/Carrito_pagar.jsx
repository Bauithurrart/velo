import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Pago = () => {
  const navigate = useNavigate();
  const [metodo, setMetodo] = useState(null);
  const seleccionarMetodo = (opcion) => {
    setMetodo((actual) => (actual === opcion ? null : opcion));
  };

  const opcionesPago = [
    {
      id: 'transferencia',
      label: 'Transferencia bancaria',
    },
    {
      id: 'tarjeta',
      label: 'Tarjeta de crédito o débito / Mercado Pago',
    },
  ];

  const colorFondo = '#a1c8cf';

  return (
    <div className="min-h-screen bg-[#a1c8cf] flex items-center justify-center p-10">
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl w-full items-center justify-center">

       
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-2xl">
          <div className="flex items-center justify-between mb-6 border-b pb-4">
            <h2 className="text-3xl font-semibold">Elegí como pagar</h2>
            <span className="text-4xl">✈️</span>
          </div>

          <div className="space-y-6">
            {opcionesPago.map((opcion) => (
              <label
                key={opcion.id}
                className={`flex items-center gap-5 px-6 py-4 rounded-lg text-xl cursor-pointer transition-all ${
                  metodo === opcion.id ? 'border-4 border-teal-700' : ''
                }`}
                style={{ backgroundColor: colorFondo }}
              >
                <input
                  type="checkbox"
                  checked={metodo === opcion.id}
                  onChange={() => seleccionarMetodo(opcion.id)}
                  className="accent-teal-700 cursor-pointer w-6 h-6"
                />
                {opcion.label}
              </label>
            ))}
          </div>

          <button
            onClick={() => navigate("/PagoFinalizado")} className="mt-10 w-full bg-teal-800 cursor-pointer text-white py-4 rounded-lg text-xl font-semibold hover:bg-teal-900 transition"
          >
            Confirmar
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 w-full h-[413px] ml-[-5px] max-w-md">
          <h3 className="text-2xl font-semibold mb-4">Resumen de compra</h3>
          <hr className="mb-6" />
          <ResumenItem label="Alojamiento" valor="18.000" />
          <ResumenItem label="Vuelos" valor="10.000" />
          <ResumenItem label="Paquetes" valor="100.000" />
          <ResumenItem label="Total" valor="128.000" isTotal />
        </div>
      </div>
    </div>
  );
};

const ResumenItem = ({ label, valor, isTotal = false }) => {
  const commonClasses = isTotal
    ? 'flex justify-between mt-6 text-2xl font-bold'
    : 'flex justify-between mb-4 text-xl';

  const valorClass = isTotal ? '' : 'font-bold';

  return (
    <div className={commonClasses}>
      <span>{label}</span>
      <span className={valorClass}>${valor}</span>
    </div>
  );
};
export default Pago;
