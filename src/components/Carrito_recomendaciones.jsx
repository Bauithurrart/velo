import React, { useEffect, useRef, useState } from 'react';

const productosBase = [
  { id: 1, nombre: 'Hotel Star', ubicacion: 'En Argentina' },
  { id: 2, nombre: 'Hotel Sol', ubicacion: 'En Brasil' },
  { id: 3, nombre: 'Hotel Luna', ubicacion: 'En Chile' },
  { id: 4, nombre: 'Hotel Cielo', ubicacion: 'En Perú' },
  { id: 5, nombre: 'Hotel Tierra', ubicacion: 'En México' },
];

const CarruselInfinito = () => {
  const cantidadVisible = 3;
  const productos = [
    ...productosBase,
    ...productosBase.slice(0, cantidadVisible), 
  ];

  const [indice, setIndice] = useState(0);
  const [animar, setAnimar] = useState(true);
  const carruselRef = useRef(null);

  const avanzar = () => {
    setIndice((prev) => prev + 1);
  };

  const retroceder = () => {
    setIndice((prev) => (prev === 0 ? productosBase.length - 1 : prev - 1));
  };

 
  useEffect(() => {
    const intervalo = setInterval(avanzar, 3000);
    return () => clearInterval(intervalo);
  }, []);

  
  useEffect(() => {
    if (indice === productos.length - cantidadVisible) {
      setTimeout(() => {
        setAnimar(false);
        setIndice(0);
      }, 700);
    } else {
      setAnimar(true);
    }
  }, [indice, productos.length]);

  const offset = (100 / cantidadVisible) * indice;

  return (
    <nav className="bg-[#a1c8cf] h-[700px]">
      <div className="bg-white rounded-lg p-6 mx-auto w-[1200px] h-[400px] mt-10 absolute ml-[180px] max-w-6xl overflow-hidden">
        <h2 className="text-xl font-semibold mb-4">
          Compradores también vieron esto:
        </h2>

        <div className="relative w-full overflow-hidden">
       
          <button
            onClick={retroceder}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-800 text-white px-3 py-2 rounded-full"
          >
            &lt;
          </button>

       
          <button
            onClick={avanzar}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-800 text-white px-3 py-2 rounded-full"
          >
            &gt;
          </button>

  
          <div
            ref={carruselRef}
            className={`flex ${animar ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{
              width: `${(productos.length * 100) / cantidadVisible}%`,
              transform: `translateX(-${offset}%)`,
            }}
          >
            {productos.map((producto, idx) => (
              <div
                key={`${producto.id}-${idx}`}
                className="w-1/3 flex flex-col items-center text-center p-4"
              >
                <div className="bg-green-300 w-full h-42 rounded-md mb-4" />
                <h3 className="font-semibold">{producto.nombre}</h3>
                <p className="text-sm text-gray-600">{producto.ubicacion}</p>
                <button className="mt-3 bg-teal-800 text-white px-4 py-1 rounded">
                  Ver detalles
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CarruselInfinito;
