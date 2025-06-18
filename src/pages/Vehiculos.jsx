// src/pages/Vehiculos.jsx
import React from "react";
import Header from "../components/Servicios_Header";
import ServicioCard from "../components/ServicioCard";
import { serviciosData } from "../data/data";

const Vehiculos = () => {
  return (
    <div>
      <Header imagen="/img/vehiculos.jpg" titulo="AUTOS Y CAMIONETAS" mostrarFiltros={true} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {serviciosData.vehiculos.map((item, i) => (
          <ServicioCard key={i} tipo="vehiculo" data={item} />
        ))}
      </div>
    </div>
  );
};

export default Vehiculos;
