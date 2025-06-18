import React, { useState } from "react";
import LogoNegroVelo from "../assets/Logo-Velo-Negro.png";
import PanelJefeProductos from "./PanelJefe_productos";
import PanelJefeVentas from "./PanelJefe_ventas";

export default function PanelJefe() {
  const [seccionActiva, setSeccionActiva] = useState("productos");

  return (
    <div className="min-h-screen bg-white mt-[4rem]">
      {/* Header */}
      <div className="flex items-center bg-[#a3c7cb] p-4">
        <img src={LogoNegroVelo} alt="Logo" className="w-14" />
        <h1 className="text-4xl font-bold px-1">Velo</h1>
        <div className="ml-auto flex">
          <button
            onClick={() => setSeccionActiva("productos")}
            className={`rounded font-bold px-6 py-4 m-1 ${
              seccionActiva === "productos" ? "bg-white text-black" : "hover:bg-white text-black"
            }`}
          >
            Productos
          </button>
          <button
            onClick={() => setSeccionActiva("ventas")}
            className={`rounded font-bold px-6 py-4 m-1 ${
              seccionActiva === "ventas" ? "bg-white text-black" : "hover:bg-white text-black"
            }`}
          >
            Ventas
          </button>
        </div>
      </div>

      {/* Sección dinámica */}
      {seccionActiva === "productos" && <PanelJefeProductos />}
      {seccionActiva === "ventas" && <PanelJefeVentas />}
    </div>
  );
}

