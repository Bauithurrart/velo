import React, { useState } from "react";

const productosIniciales = [
  { id: 1, nombre: "Hotel Var", pais: "Argentina", unidades: 2, precio: 2000, activo: true },
  { id: 2, nombre: "Hotel Var", pais: "Argentina", unidades: 2, precio: 2000, activo: false },
  { id: 3, nombre: "Hotel Var", pais: "Argentina", unidades: 2, precio: 2000, activo: true },
  { id: 4, nombre: "Hotel Var", pais: "Argentina", unidades: 2, precio: 2000, activo: false },
];

export default function PanelJefeProductos() {
  const [productos, setProductos] = useState(productosIniciales);
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const toggleActivo = (id) => {
    setProductos(productos.map(p =>
      p.id === id ? { ...p, activo: !p.activo } : p
    ));
  };

  return (
    <div>
      {/* Filtros */}
      <div className="p-4 relative">
        <div className="flex items-center bg-[#a3c7cb] w-96 p-3 rounded gap-4">
          <p className="bg-[#a3c7cb] text-xl font-semibold px-4 py-2 rounded-l">Filtros</p>
          <button
            className="bg-white text-black px-4 py-2 rounded"
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
          >
            Filtrar
          </button>
        </div>

        {/* Menú desplegable */}
        {mostrarFiltros && (
          <div className="absolute mt-2 left-0 bg-gray-200 m-5 p-4 rounded shadow-lg w-64 z-10">
            <div className="space-y-2">
              <div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#5bc0c0]" />
                  Activas
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#5bc0c0]" />
                  Inactivas
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#5bc0c0]" />
                  Sin stock
                </label>
              </div>
              <p className="font-semibold pt-2">Categoría</p>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#5bc0c0]" />
                  Vuelos
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#5bc0c0]" />
                  Estadías
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#5bc0c0]" />
                  Autos
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#5bc0c0]" />
                  Paquetes
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lista de productos */}
      <div className="space-y-3 px-4 pb-6">
        {productos.map((p) => (
          <div key={p.id} className="bg-[#a3c7cb] flex items-center justify-between rounded-md px-4 py-3">
            <div className="flex items-center space-x-4">
              <img src="https://via.placeholder.com/40" alt="img" className="w-10 h-10 rounded-md" />
              <div>
                <div className="text-lg font-medium">{p.nombre}</div>
                <div className="text-sm">{p.pais}</div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-lg">{p.unidades} unidades</div>
              <div className="text-lg font-semibold">${p.precio.toLocaleString()}</div>
              <button className="bg-white px-3 py-1 rounded text-sm">Modificar</button>

              <button
                onClick={() => toggleActivo(p.id)}
                className={`w-11 h-6 flex items-center rounded-full transition duration-300 ${
                  p.activo ? "bg-[#37595c]" : "bg-gray-400"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                    p.activo ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
