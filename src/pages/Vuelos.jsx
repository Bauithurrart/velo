// src/pages/Vuelos.jsx
import React from "react";
import Header from "../components/Servicios_Header";
import ServicioCard from "../components/ServicioCard";
import { serviciosData } from "../data/data";

const Vuelos = () => {
  return (
    <div>
      <Header imagen="/img/vuelo.jpg" titulo="VUELOS" mostrarFiltros={true} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {serviciosData.vuelos.map((item, i) => (
          <ServicioCard key={i} tipo="vuelo" data={item} />
        ))}
      </div>
    </div>
  );
};

export default Vuelos;
