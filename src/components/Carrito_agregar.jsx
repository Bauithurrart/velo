import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import CarritoRecomendados from "../components/Carrito_recomendaciones"

const CarritoViaje = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Francia",
      descripcion: "2 noches | Salida 2 de Abril",
      precio: 100000,
      tipo: "Paquete",
    },
    {
      id: 2,
      nombre: "Buenos aires a Madrid",
      descripcion: "2 pasajes",
      precio: 18000,
      tipo: "Vuelo",
    },
    {
      id: 3,
      nombre: "Hotel Estrella",
      descripcion: "Suite | 4 noches",
      precio: 18000,
      tipo: "Alojamiento",
    },
  ]);

  const eliminarProducto = (id) => {
    setProductos((prevProductos) => prevProductos.filter((p) => p.id !== id));
  };

  const calcularTotales = () => {
    const total = productos.reduce((acc, p) => acc + p.precio, 0);

    const sumarPorTipo = (tipo) =>
      productos
        .filter((p) => p.tipo === tipo)
        .reduce((acc, p) => acc + p.precio, 0);

    return {
      total,
      alojamiento: sumarPorTipo("Alojamiento"),
      vuelos: sumarPorTipo("Vuelo"),
      paquetes: sumarPorTipo("Paquete"),
    };
  };

  const { total, alojamiento, vuelos, paquetes } = calcularTotales();

  return (
    <div className="flex p-12 bg-[#a1c8cf] min-h-screen gap-6">
    
      <div className="bg-white rounded-lg shadow-md w-2/3 p-6">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-400 h-[50px] mb-[20px]">Productos agregados</h2>

        {productos.map(({ id, nombre, descripcion, precio }) => (
          <div key={id} className="flex items-start justify-between border-b border-gray-200 py-4">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-md" />

              <div>
                <h3 className="font-semibold">{nombre}</h3>
                <p className="text-sm text-gray-600">{descripcion}</p>

                <div className="mt-2 flex gap-2">
                  <button className="bg-emerald-700 text-white px-3 py-1 cursor-pointer rounded text-sm">
                    Detalles
                  </button>
                  <button
                    onClick={() => eliminarProducto(id)}
                    className="bg-gray-700 cursor-pointer text-white px-3 py-1 rounded text-sm"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>

            <span className="font-bold text-lg">
              ${precio.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

     
      <div className="bg-white rounded-lg shadow-md w-1/3 p-6">
        <h2 className="text-xl font-semibold border-b border-gray-400 h-[50px] mb-[20px]">Resumen de compra</h2>

        <div className="space-y-2">
          <ResumenItem label="Alojamiento" valor={alojamiento} />
          <ResumenItem label="Vuelos" valor={vuelos} />
          <ResumenItem label="Paquetes" valor={paquetes} />
        </div>

        <hr className="my-4" />

        <ResumenItem label="Total" valor={total} isBold />

        <div className="flex flex-col gap-4 mt-6">
          <button onClick={() => navigate("/Paquetes")} className="bg-teal-800 cursor-pointer text-white py-2 rounded">
            Continuar comprando
          </button>
          <button  onClick={() => navigate("/Pagando")} className="bg-teal-800 cursor-pointer text-white py-2 rounded">
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

const ResumenItem = ({ label, valor, isBold = false }) => {
  const labelClass = isBold ? "font-semibold" : "";
  const valueClass = isBold ? "font-bold" : "";

  return (
    <div className="flex justify-between">
      <span className={labelClass}>{label}</span>
      <span className={`text-right ${valueClass}`}>
        ${valor.toLocaleString()}
      </span>
    </div>
    
  );
};

export default CarritoViaje;
