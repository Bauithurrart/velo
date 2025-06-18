// src/pages/Paquetes.jsx
import React from "react";
import Header from "../components/Servicios_Header";
import ServicioCard from "../components/ServicioCard";
import { serviciosData } from "../data/data";

const Paquetes = () => {
  return (
    <div>
      <Header imagen="/img/paquete.jpg" titulo="PAQUETES" mostrarFiltros={true} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {serviciosData.paquetes.map((item, i) => (
          <ServicioCard key={i} tipo="paquete" data={item} />
        ))}
      </div>
    </div>
  );
};

export default Paquetes;




