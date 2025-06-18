import React, { useState } from 'react';
import LogoNegro from "../assets/Logo-Velo-Negro.png";
import imagen1 from "../assets/paisajes-paris.webp";
import imagen2 from "../assets/paisajes-paris2.webp";
import imagen3 from "../assets/paisajes-paris3.webp";
import imagen4 from "../assets/paisajes-paris4.webp";

const DetallePaquetes = () => {
    const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

    const descargarPlanViaje = () => {
        const contenido = `
            PLAN DE VIAJE - VELO AGENCY
            ===========================
            
            Destino: París, Francia
            Número de noches: 9 noches
            Salida: Buenos Aires, Argentina
            Alojamiento: Hotel Five Mar All Inclusive
            Fecha de salida: 7 de Julio 2025, 20hs
            Fecha de regreso: 20 de Julio 2025, 20hs
            Precio: $100.000
            
            INCLUYE:
            - Vuelo ida y vuelta en clase económica
            - Alojamiento en hotel 5 estrellas
            - Desayuno buffet diario
            - Traslados aeropuerto-hotel-aeropuerto
            - 3 excursiones guiadas
            - Seguro de viaje
            
            ITINERARIO:
            Día 1: Llegada a París y traslado al hotel
            Día 2: Tour por la Torre Eiffel y Campos Elíseos
            Día 3: Visita al Museo del Louvre
            Día 4: Día libre para actividades personales
            Día 5: Excursión a Versalles
            Día 6: Crucero por el Sena
            Día 7: Visita al Barrio Latino y Notre Dame
            Día 8: Día libre para compras
            Día 9: Regreso a Buenos Aires
            
            ---------------------------------
            ¡Gracias por elegir Velo Agency!
            
            Contacto:
            Email: veloagency@hotmail.com
            Teléfono: +54 11 1234-5678
            Web: www.veloagency.com
        `;

        try {
            const blob = new Blob([contenido], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'plan-viaje-paris.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error al descargar el plan de viaje:', error);
        }
    };

    const agregarAlCarrito = () => {
        setMostrarNotificacion(true);
        setTimeout(() => setMostrarNotificacion(false), 3000);
    };

    return (
        <main className="flex justify-center min-h-screen bg-[#a1c8cf] p-6 gap-6 mt-[4rem]">
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

            <article className="w-full max-w-2xl bg-gray-50 rounded-xl shadow-lg overflow-hidden">
                <section className="flex justify-between items-center p-6 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center">
                        <img 
                            className="w-24 h-auto" 
                            src={LogoNegro} 
                            alt="Logo de Velo" 
                        />
                        <h1 className="text-3xl font-bold ml-4 text-gray-800">Francia</h1>
                    </div>
                    <div className="text-right">
                        <h3 className="text-2xl font-bold text-[#3a5f63]">$100.000</h3>
                        <p className="text-gray-800 font-semibold">Precio unitario</p>
                    </div>
                </section>

                <div className="p-6 text-gray-700 font-semibold leading-relaxed">
                    <p className="text-center">
                        Disfruta de un viaje inolvidable por las hermosas ciudades de Francia. 
                        Incluye alojamiento en hotel 5 estrellas, tours guiados y traslados.
                    </p>
                </div>

                <section className="p-6 space-y-4">
                    <ItemDetalle etiqueta="Número de noches" valor="9 noches" />
                    <ItemDetalle etiqueta="Destino" valor="París, Francia" />
                    <ItemDetalle etiqueta="Salida" valor="Buenos Aires, Argentina" />
                    <ItemDetalle etiqueta="Alojamiento" valor="Hotel Five Mar All Inclusive" />
                    <ItemDetalle etiqueta="Fecha de salida" valor="7 de Julio 2025, 20hs" />
                    <ItemDetalle etiqueta="Fecha de regreso" valor="20 de Julio 2025, 20hs" />
                </section>

                <section className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={descargarPlanViaje}
                        className="w-full sm:w-auto bg-[#3a5f63] hover:bg-[#2d4a4e] text-white font-medium cursor-pointer py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                        aria-label="Descargar plan de viaje"
                    >
                        Descargar plan de viaje
                    </button>
                    <button 
                        onClick={agregarAlCarrito}
                        className="w-full sm:w-auto bg-[#3a5f63] hover:bg-[#2d4a4e] text-white font-medium cursor-pointer py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                        aria-label="Agregar al carrito"
                    >
                        Agregar al carrito
                    </button>
                </section>
            </article>

            <article className="hidden lg:block w-80 bg-gray-50 rounded-xl shadow-lg overflow-hidden">
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

export default DetallePaquetes;