import React from "react";

const ventas = [
  { id: 1, cliente: "Juan Pérez", producto: "Vuelo a París", fecha: "2025-06-15", total: 1200 },
  { id: 2, cliente: "Ana Gómez", producto: "Hotel en Mendoza", fecha: "2025-06-14", total: 600 },
  { id: 3, cliente: "Carlos Díaz", producto: "Auto en Bariloche", fecha: "2025-06-13", total: 400 },
];

export default function PanelJefeVentas() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Historial de Ventas</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-[#a3c7cb] text-left">
          <tr>
            <th className="p-2 border border-gray-300">ID</th>
            <th className="p-2 border border-gray-300">Cliente</th>
            <th className="p-2 border border-gray-300">Producto</th>
            <th className="p-2 border border-gray-300">Fecha</th>
            <th className="p-2 border border-gray-300">Total</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta) => (
            <tr key={venta.id} className="hover:bg-gray-100">
              <td className="p-2 border border-gray-300">{venta.id}</td>
              <td className="p-2 border border-gray-300">{venta.cliente}</td>
              <td className="p-2 border border-gray-300">{venta.producto}</td>
              <td className="p-2 border border-gray-300">{venta.fecha}</td>
              <td className="p-2 border border-gray-300">${venta.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
