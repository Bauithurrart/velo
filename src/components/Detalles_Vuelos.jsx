import React, { useState } from 'react';
import LogoNegro from "../assets/Logo-Velo-Negro.png";
import imagen1 from "../assets/paisajes-paris.jpg";
import imagen2 from "../assets/paisajes-paris2.jpg";
import imagen3 from "../assets/paisajes-paris3.jpg";
import imagen4 from "../assets/paisajes-paris4.jpg";

const Vuelos = () => {
    const [mostrarNotificacion, setMostrarNotificacion] = useState(false);
    const [cantidadPasajes, setCantidadPasajes] = useState(1);

    const agregarAlCarrito = () => {
        if (cantidadPasajes < 1) {
            alert("La cantidad de pasajes debe ser al menos 1");
            return;
        }

        setMostrarNotificacion(true);
        setTimeout(() => setMostrarNotificacion(false), 3000);
        
       
        console.log("Pasajes agregados:", {
            cantidad: cantidadPasajes,
            total: 100000 * cantidadPasajes
        });
    };

    const handleCantidadChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1);
        setCantidadPasajes(value);
    };

    return (
        <main className="flex justify-center min-h-screen bg-[#a1c8cf] p-6 gap-6">
           
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
                        <span>Cantidad de pasajes agregados exitosamente: {cantidadPasajes} </span>
                    </div>
                </div>
            )}

           
            <article className="w-full max-w-2xl bg-gray-50 rounded-xl shadow-lg overflow-hidden">
             
                <section className="flex justify-between items-center p-6 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center">
                        <img 
                            className="w-24 h-auto" 
                            src={LogoNegro} 
                            alt="Logo de Velo" 
                        />
                        <h1 className="text-3xl font-bold ml-4 text-gray-800">Vuelo a París</h1>
                    </div>
                    <div className="text-right">
                        <h3 className="text-2xl font-bold text-[#3a5f63]">$100.000</h3>
                        <p className="text-gray-800 font-semibold">Precio unitario</p>
                    </div>
                </section>

               
                <div className="p-6 text-gray-700 font-semibold leading-relaxed">
                    <p className="text-center">
                        Disfruta de un viaje inolvidable a la ciudad del amor. Incluye vuelo directo, 
                        traslados y asistencia durante todo el recorrido.
                    </p>
                </div>

                
                <section className="p-6 space-y-4">
                    <ItemDetalle etiqueta="Destino" valor="París, Francia" />
                    <ItemDetalle etiqueta="Salida" valor="Roma, Italia" />
                    <ItemDetalle etiqueta="Fecha de Salida" valor="7 de Julio 2025, 20hs" />
                    <ItemDetalle etiqueta="Fecha de Regreso" valor="20 de Julio 2025, 20hs" />
                    <ItemDetalle etiqueta="Tipo de Vuelo" valor="Economy" />
                    <ItemDetalle etiqueta="Aerolínea" valor="Aerolíneas Argentinas" />
                </section>

                
                <section className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="w-full md:w-auto">
                        <label 
                            htmlFor="cantidad-pasajes" 
                            className="block text-gray-800 font-semibold mb-2 text-center"
                        >
                            Cantidad de pasajes
                        </label>
                        <input 
                            id="cantidad-pasajes"
                            className="w-full md:w-60 bg-gray-100 font-semibold rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a5f63] focus:border-transparent" 
                            type="number" 
                            min="1" 
                            value={cantidadPasajes}
                            onChange={handleCantidadChange}
                            aria-label="Cantidad de pasajes"
                        />
                    </div>
                    <button 
                        onClick={agregarAlCarrito}
                        className="w-full md:w-60 bg-[#3a5f63] hover:bg-[#2d4a4e] mt-[33px] text-white font-medium py-2 px-4 cursor-pointer rounded-lg transition-all duration-300 transform hover:scale-105"
                        aria-label="Agregar al carrito"
                    >
                        Agregar al carrito
                    </button>
                </section>
            </article>

           
            <article className="hidden lg:block w-80 bg-gray-50 rounded-xl shadow-lg overflow-hidden h-full">
                <section className="p-4 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800 text-center">Nuestra galería</h1>
                </section>

                <section className="p-4 space-y-4">
                    <div className="overflow-hidden rounded-lg">
                        <img 
                            src={imagen4} 
                            alt="Vista de París" 
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" 
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="w-1/2 overflow-hidden rounded-lg">
                            <img 
                                src={imagen1} 
                                alt="Torre Eiffel" 
                                className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                        <div className="w-1/2 overflow-hidden rounded-lg">
                            <img 
                                src={imagen2} 
                                alt="Arco del Triunfo" 
                                className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg">
                        <img 
                            src={imagen3} 
                            alt="Museo del Louvre" 
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" 
                        />
                    </div>
                </section>
            </article>
        </main>
    );
};

const ItemDetalle = ({ etiqueta, valor }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <h2 className="text-lg font-semibold text-gray-700">{etiqueta}</h2>
            <p className="text-gray-700 text-right font-semibold md:text-left md:pl-4">{valor}</p>
        </div>
    );
};

export default Vuelos;