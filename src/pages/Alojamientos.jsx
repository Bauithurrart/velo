import React from "react";
import Header from "../components/Servicios_Header"; // o como se llame tu header
import ServicioCard from "../components/ServicioCard";
import { serviciosData } from "../data/data";

const Alojamientos = () => {
  return (
    <div>
      <Header imagen="/img/alojamiento.jpg" titulo="ALOJAMIENTOS" mostrarFiltros={true} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {serviciosData.alojamientos.map((item, i) => (
          <ServicioCard key={i} tipo="alojamiento" data={item} />
        ))}
      </div>
    </div>
  );
};

export default Alojamientos;





