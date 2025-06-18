// import Servicios_TarjetaDestino from "../components/Servicios_TarjetaDestino"
// import Servicios_Carrusel from "../components/Servicios_Carrusel"
// import Servicios_Seccion from "../components/Servicios_Seccion"

const Header = ({ imagen, titulo, mostrarFiltros = true }) => {
  return (
    <div className="bg-[#a1c8cf]">
    <header>
      <div className="relative w-full h-[500PX] overflow-hidden">
        <img
          src={imagen}
          alt={titulo}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-start justify-start p-30">
          <h1 className="text-white text-5xl font-bold">{titulo}</h1>
        </div>
      </div>

{mostrarFiltros && (
  <div className="-mt-12 relative z-10 bg-[#3a5f63] px-10 py-6 rounded-3xl flex flex-col gap-4 w-[75%] mx-auto shadow-2xl font-sans">
    
    {/* Input más fino */}
    <div className="relative w-60">
      <input
        type="text"
        placeholder="Filtrar por búsqueda"
        className="py-1.5 pl-10 pr-4 rounded-full w-full text-base text-white placeholder-white bg-opacity-10"
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398l3.85 3.85a1 1 0 001.415-1.415l-3.85-3.85zm-5.242 1.656a5 5 0 110-10 5 5 0 010 10z" />
      </svg>
    </div>

    {/* Botones más grandes y a la derecha */}
    <div className="flex flex-wrap items-center justify-end gap-4 text-base">
      <select className="py-3 px-4 rounded-full bg-white text-gray-800 w-44">
        <option>Categoría</option>
      </select>
      <button className="bg-white text-gray-800 py-3 px-6 rounded-full">Destino</button>
      <button className="bg-white text-gray-800 py-3 px-6 rounded-full">Destino</button>
      <button className="bg-white text-gray-800 py-3 px-6 rounded-full">Destino</button>
      <button className="bg-gray-900 text-white py-3 px-8 rounded-full">BUSCAR</button>
    </div>
  </div>
)}
    </header>

    </div>

  );
};

export default Header;

