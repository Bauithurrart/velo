import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hotel, Plane, Car, Briefcase, ChevronDown } from "lucide-react";

export default function HeaderViajes() {
  const navigate = useNavigate();
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const alternarMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  const opcionesMenu = [
    { icono: <Hotel size={20} />, texto: "Argentina" },
    { icono: <Briefcase size={20} />, texto: "Internacionales" },
    { icono: <Plane size={20} />, texto: "Paquetes" },
  ];

  const camposFormulario = [
    { placeholder: "Salida", tipo: "text" },
    { placeholder: "Regreso", tipo: "text" },
    { placeholder: "Pasajeros", tipo: "text" },
  ];

  return (
    <header
      className="relative min-h-screen bg-cover bg-center text-white px-6 flex flex-col justify-center"
      style={{ backgroundImage: "url('/src/assets/principal.webp')" }}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="absolute ml-[180px] mt-[40px] z-10 max-w-5xl mb-16">
        <h1 className="text-6xl md:text-7xl gap-4 font-medium mb-4">
          Elige el viaje de tus sueños con nosotros.
        </h1>
        <p className="text-lg md:text-xl text-white/90">
          Nos aseguramos de brindarte seguridad y confianza, para que tu viaje valga la <br />
          pena.
        </p>
      </div>

      <div className="w-full max-w-6xl bg-black/30  absolute backdrop-blur-md flex flex-wrap items-center justify-center gap-10 p-4 z-10 relative mx-auto h-[110px] mt-[548px]">
        <div className="relative">
          <button
            onClick={alternarMenu}
            className="bg-[#1e1e1e] text-white px-4 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
            aria-expanded={mostrarMenu}
            aria-haspopup="true"
          >
            Elige tu viaje
            <ChevronDown size={18} />
          </button>

          {mostrarMenu && (
            <ul className="absolute top-14 left-0 bg-white text-black shadow-lg rounded-xl p-2 w-42 space-y-2 z-50">
              {opcionesMenu.map((opcion, indice) => (
                <li
                  key={indice}
                  className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
                >
                  {opcion.icono}
                  {opcion.texto}
                </li>
              ))}
            </ul>
          )}
        </div>

        {camposFormulario.map((campo, indice) => (
          <input
            key={indice}
            type={campo.tipo}
            placeholder={campo.placeholder}
            className="bg-[#1e1e1e] text-white px-4 py-3 rounded-xl w-50"
          />
        ))}

        <button onClick={() => navigate("/Paquetes")} className="bg-[#1e1e1e] text-white px-6 py-3 rounded-xl font-bold cursor-pointer hover:bg-gray-900 transition">
          BUSCAR
        </button>
      </div>
    </header>
  );
}