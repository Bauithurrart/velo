import React from 'react';
import { MapPin, Phone, Mail } from "lucide-react";
import { FaPlane } from "react-icons/fa";
import imagenEquipo from '../assets/nosotros.webp';


export default function Nosotros() {
  return (
    <>
      {/* Presentación */}
      <div className="min-h-screen bg-[#a1c8cf] flex flex-col md:flex-row items-center justify-center p-10 space-y-10 md:space-y-0 md:space-x-16">
        <img
          src={imagenEquipo}
          alt="Equipo Velo"
          className="rounded-xl w-full max-w-md shadow-lg"
        />
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-6xl font-extrabold text-gray-900 flex items-center justify-center md:justify-start">
            Velo
            <span className="ml-2 text-4xl">🌍✈️</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-900 font-bold">
            Nos mueve la curiosidad, la cultura y la conexión.<br />
            Diseñamos experiencias reales, sin moldes ni formalidades.<br />
            De Argentina al mundo, cruzamos rutas, calles y culturas.<br />
            Charlas, sabores, música, historia y personas: eso es viajar.<br />
            Somos Velo: espontáneos, flexibles, presentes.
          </p>
          <button className="bg-[#222] mt-[60px] w-[400px] text-white px-8 py-4 rounded-full text-sm">
            Amamos lo auténtico, lo local, lo vivo.
          </button>
        </div>
      </div>

      {/* Oficina */}
      <div className="min-h-screen bg-white px-10 py-20 flex flex-col lg:flex-row items-start gap-10 ml-[200px] mt-[100px]">
        <div className="grid grid-cols-3 gap-4 max-w-[600px]">
          <img src={imagenEquipo} alt="1" className="rounded-md object-cover w-full aspect-[4/3]" />
          <img src={imagenEquipo} alt="2" className="rounded-md object-cover w-full aspect-[4/3]" />
          <img src={imagenEquipo} alt="3" className="rounded-md object-cover w-full aspect-[4/3]" />
          <img src={imagenEquipo} alt="4" className="rounded-md object-cover w-full aspect-[4/3]" />
          <img src={imagenEquipo} alt="destacada" className="rounded-md object-cover w-full h-[140px] aspect-[4/2] col-span-2" />
          <img src={imagenEquipo} alt="6" className="rounded-md object-cover w-full aspect-[4/3]" />
          <img src={imagenEquipo} alt="7" className="rounded-md object-cover w-full h-[140px] aspect-[4/2] col-span-2" />
        </div>
        <div className="space-y-8 border-t lg:border-t-0 lg:border-l border-gray-600 h-[450px] pt-8 lg:pt-0 lg:pl-8">
          <h2 className="text-3xl font-bold">Nuestra oficina</h2>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <MapPin className="w-6 h-6" />
              <p className="text-xl font-semibold">Dirección</p>
            </div>
            <p className="text-gray-700 ml-9">Av Artigas 1983 - Departamento 2 Piso 4</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Phone className="w-6 h-6" />
              <p className="text-xl font-semibold">Teléfono</p>
            </div>
            <p className="text-gray-700 ml-9">+54 2281 - 59 36 72</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Mail className="w-6 h-6" />
              <p className="text-xl font-semibold">E-mail</p>
            </div>
            <p className="text-gray-700 ml-9">veloagency@hotmail.com</p>
          </div>
        </div>
      </div>

      {/* Misión y Motivos */}
      <section className="flex flex-col md:flex-row w-full min-h-screen bg-white px-6 py-12 m-4">
        <div className="md:w-2/3 w-full">
          <div className="mb-12">
            <h2 className="text-2xl ml-[-30px] pl-[50px] font-bold bg-gray-300 p-3 pl-8 mb-6 rounded-lg">Nuestra misión</h2>
            {[
              "En Velo creemos que viajar es mucho más que moverse de un lugar a otro.",
              "Es conectar con culturas, personas e historias.",
              "Es abrir la mirada, romper rutinas y volver distintos.",
              "Nuestro propósito es crear experiencias que dejen huella.",
              "Viajes culturales, humanos y cercanos, donde lo importante no es llegar, sino lo que pasa en el camino.",
              "Queremos que cada viaje sea una excusa para descubrir, compartir y sentir.",
              "Eso es lo que nos mueve."
            ].map((text, i) => (
              <p key={i} className="text-gray-700 mb-4 text-lg">
                {i === 0 ? <strong>Velo</strong> : ''} {text.replace('Velo', '')}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-2xl ml-[-30px] pl-[50px] font-bold bg-gray-300 p-3 mb-6 rounded-lg">¿Por qué elegirnos?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
              {[
                "Porque viajamos con sentido: no hacemos turismo, vivimos experiencias.",
                "Porque cuidamos cada detalle, sin perder la frescura ni la libertad.",
                "Porque conocemos los destinos y nos importa lo que vivas en cada uno.",
                "Porque mezclamos lo clásico con lo inesperado: cultura, calle, comida, charla, historia.",
                "Porque no seguimos un molde: cada viaje es único, como vos."
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="hidden md:block w-1/5 bg-cover bg-center rounded-lg ml-36"
          style={{ backgroundImage: `url(${imagenEquipo})` }}
          aria-label="Imagen representativa de la misión de Velo"
        />
      </section>

      {/* Banner */}
      <div className="bg-white w-full py-38 flex justify-center items-center relative">
        <FaPlane
          className="text-[#3a5f63] text-[100px] md:text-[160px] absolute right-[240px] top-[150px] -translate-y-1/2 rotate-[230deg] opacity-100 z-10"
          aria-hidden="true"
        />
        <div className="relative bg-[#a1c8cf] w-full max-w-[1520px] h-[300px] rounded-md shadow-lg flex flex-col justify-center items-center z-0 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-[#1b4d4f]">
            VELO.
          </h1>
          <p className="text-2xl md:text-5xl font-bold tracking-tight leading-snug text-[#3a5f63]">
            VIAJÁ DISTINTO. SENTÍ EL CAMINO.
          </p>
        </div>
      </div>
    </>
  );
}


