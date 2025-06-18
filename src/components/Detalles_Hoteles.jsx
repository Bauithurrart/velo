import React, { useState } from "react";
import LogoNegro from "../assets/Logo-Velo-Negro.png";
import img1 from "../assets/paisajes-paris.webp";
import img2 from "../assets/paisajes-paris2.webp";
import img3 from "../assets/paisajes-paris3.webp";
import img4 from "../assets/paisajes-paris4.webp";

function Hoteles() {
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);
  const [formData, setFormData] = useState({
    fechaIngreso: "",
    fechaSalida: "",
    huespedes: 1,
    habitacion: ""
  });

  const camposFormulario = [
    { 
      etiqueta: "Fecha de Ingreso", 
      tipo: "date",
      name: "fechaIngreso"
    },
    { 
      etiqueta: "Fecha de Salida", 
      tipo: "date",
      name: "fechaSalida"
    },
    { 
      etiqueta: "N° de Huespedes", 
      tipo: "number",
      name: "huespedes"
    },
    { 
      etiqueta: "Tipo de Habitación", 
      tipo: "text",
      name: "habitacion"
    },
  ];

  const imagenesGaleria = [
    { src: img4, alt: "Vista del hotel" },
    { src: img1, alt: "Habitación del hotel" },
    { src: img2, alt: "Restaurante del hotel" },
    { src: img3, alt: "Piscina del hotel" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const agregarAlCarrito = () => {
    if (!formData.fechaIngreso || !formData.fechaSalida) {
      alert("Por favor complete las fechas de ingreso y salida");
      return;
    }

    setMostrarNotificacion(true);
    setTimeout(() => setMostrarNotificacion(false), 3000);
    
    console.log("Datos enviados:", formData);
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-[#a1c8cf] p-8">
      {mostrarNotificacion && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fadeInDown">
          <div className="bg-[#3a5f63] text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
            <svg 
              className="w-6 h-6 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span>Se ha agregado al carrito exitosamente</span>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-1">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <img className="w-20 h-auto mr-4" src={LogoNegro} alt="Logo del hotel" />
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Hotel Paris YS</h1>
                  <p className="text-gray-800 font-semibold">Paris, Francia</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[#3a5f63]">$15.000</p>
                <p className="text-gray-800 font-semibold">Por noche</p>
              </div>
            </div>

            <p className="mt-6 text-gray-900 font-semibold leading-relaxed">
              Disfrute de una experiencia única en nuestro hotel boutique ubicado en el corazón de París.
              Ofrecemos comodidades de lujo, servicio excepcional y vistas impresionantes a la ciudad.
            </p>

            <div className="mt-8 space-y-6">
              {camposFormulario.map((campo, indice) => (
                <div key={indice} className="grid grid-cols-1 md:grid-cols-2 items-center">
                  <label className="text-lg font-medium text-gray-700 mb-2 md:mb-0">
                    {campo.etiqueta}
                  </label>
                  <input
                    type={campo.tipo}
                    name={campo.name}
                    value={formData[campo.name]}
                    onChange={handleChange}
                    className="bg-gray-100 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a5f63] w-full md:w-64"
                    min={campo.tipo === "number" ? "1" : undefined}
                    required={campo.tipo === "date"}
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={agregarAlCarrito}
              className="mt-10 w-full bg-[#3a5f63] hover:bg-[#2d4a4e] text-white cursor-pointer font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Agregar al carrito
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full lg:w-1/3">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestra galería</h2>
            
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src={imagenesGaleria[0].src} alt={imagenesGaleria[0].alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              
              <div className="flex gap-4">
                <div className="rounded-xl overflow-hidden shadow-md flex-1">
                  <img src={imagenesGaleria[1].src} alt={imagenesGaleria[1].alt} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md flex-1">
                  <img src={imagenesGaleria[2].src} alt={imagenesGaleria[2].alt} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src={imagenesGaleria[3].src} alt={imagenesGaleria[3].alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hoteles;