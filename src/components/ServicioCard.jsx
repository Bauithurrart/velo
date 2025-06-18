import React from "react";
import { serviciosData } from "../data/data";
const ServicioCard = ({ tipo, data }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 cursor-pointer hover:shadow-lg transition-shadow">
      <div className="relative h-40 rounded mb-2 overflow-hidden">
        <img
          src={data.imagen}
          alt={data.nombre}
          className="w-full h-full object-cover"
        />
        {/* SPAN en la esquina inferior izquierda */}
        {tipo === "alojamiento" && (
          <span className="absolute bottom-2 left-2 bg-[#3a5f63] text-white text-xs px-2 py-1 rounded">
            {data.ubicacion}
          </span>
        )}
        {tipo === "vuelo" && (
          <span className="absolute bottom-2 left-2 bg-[#3a5f63] text-white text-xs px-2 py-1 rounded">
            {data.salida} → {data.destino}
          </span>
        )}
        {tipo === "vehiculo" && (
          <span className="absolute bottom-2 left-2 bg-[#3a5f63] text-white text-xs px-2 py-1 rounded">
            {data.asientos} asientos
          </span>
        )}
        {tipo === "paquete" && (
          <span className="absolute bottom-2 left-2 bg-[#3a5f63] text-white text-xs px-2 py-1 rounded">
            {data.noches} noches | {data.fechaSalida}
          </span>
        )}
      </div>

      <h3 className="mt-2 font-bold text-lg">{data.nombre}</h3>

      {tipo === "alojamiento" && (
        <>
          <ul className="text-sm text-gray-600 mb-2 list-disc list-inside">
            <li>{data.descripcion}</li>
            <li>Incluye desayuno</li>
          </ul>
          <p className="font-bold text-right">
            USD {data.precioPorNoche} / noche
          </p>
        </>
      )}

      {tipo === "vuelo" && (
        <>
          <ul className="text-sm text-gray-600 mb-2 list-disc list-inside">
            <li>Fecha: {data.fecha}</li>
            <li>Aerolínea: {data.aerolinea}</li>
          </ul>
          <p className="font-bold text-right">USD {data.precio}</p>
        </>
      )}

      {tipo === "vehiculo" && (
        <>
          <ul className="text-sm text-gray-600 mb-2 list-disc list-inside">
            <li>{data.descripcion}</li>
            <li>Incluye seguro básico</li>
          </ul>
          <p className="font-bold text-right">
            USD {data.precio} / día
          </p>
        </>
      )}

      {tipo === "paquete" && (
        <>
          <ul className="text-sm text-gray-600 mb-2 list-disc list-inside">
            <li>Destino: {data.destino}</li>
            <li>Regreso: {data.fechaRegreso}</li>
            <li>Incluye asistencia al viajero</li>
          </ul>
          <p className="font-bold text-right">USD {data.precio}</p>
        </>
      )}
    </div>
  );
};

export default ServicioCard;



