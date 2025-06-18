import React, { useEffect, useState, useMemo } from 'react';
import CarritoFrase from "../components/Carrito_frase.jsx"
const destinos = [
  { nombre: 'Francia' },
  { nombre: 'Alemania' },
  { nombre: 'Chile' },
  { nombre: 'Canada' },
  { nombre: 'Italia' },
  { nombre: 'España' },
  { nombre: 'Portugal' },
];

const ITEM_WIDTH = 250;

const CarruselDestinos = () => {
  const [offset, setOffset] = useState(0);
  const totalItems = destinos.length;

  const duplicados = useMemo(() => [...destinos, ...destinos], []);

  useEffect(() => {
    const intervalo = setInterval(Derecha, 3000);
    return () => clearInterval(intervalo);
  }, []);

  const Derecha = () => {
    setOffset((prev) => (prev + 1) % totalItems);
  };

  const Izquierda = () => {
    setOffset((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <div className="bg-white w-[1520px] p-6 rounded-md shadow-inner text-center">
      <h3 className="text-2xl font-semibold mb-6">Encontrá tu destino ideal:</h3>
      <div className="flex items-center justify-center space-x-4">
        <button onClick={Izquierda} className="bg-[#3b4e4f] text-white w-10 h-10 rounded-full text-xl">
          &#8249;
        </button>

        <div className="overflow-hidden w-[1300px]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${offset * ITEM_WIDTH}px)` }}
          >
            {duplicados.map((destino, index) => (
              <div key={index} className="flex-shrink-0 w-[240px] mx-2 flex flex-col items-center">
                <div className="w-full h-40 bg-gradient-to-b from-sky-200 to-green-300 rounded-xl shadow-md" />
                <p className="mt-3 font-semibold text-lg">{destino.nombre}</p>
              </div>
            ))}
          </div>
        </div>

        <button onClick={Derecha} className="bg-[#3b4e4f] text-white w-10 h-10 rounded-full text-xl">
          &#8250;
        </button>
      </div>
    </div>
  );
};

const SinProductos = () => {
  return (
    <div className="min-h-screen bg-[#a1c8cf] flex flex-col items-center justify-center p-10 space-y-10">
      <div className="bg-white rounded-md shadow-md w-[50%] max-w-6xl ml-[-430px] p-10 h-72">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Productos agregados</h2>
          <span className="text-4xl">🛫</span>
        </div>
        <p className="text-gray-700 text-xl">
          No tienes productos agregados. Velo tiene miles de opciones para vos.
        </p>
      </div>

      <CarruselDestinos />      
      <CarritoFrase/>

    </div>
  );
};

export default SinProductos;
