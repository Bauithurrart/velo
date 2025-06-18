import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login_ConfirmarMail = () => {
  const navigate = useNavigate();

  // Estado para usuario, código y mensajes
  const [usuario, setUsuario] = useState("");
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(false);

  // Manejo cambio inputs
  const manejarCambioUsuario = (e) => setUsuario(e.target.value);
  const manejarCambioCodigo = (e) => setCodigo(e.target.value);

  // Enviar código para confirmar mail
  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (!usuario || !codigo) {
      alert("Por favor completá usuario y código.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/Confirmar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, codigo }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Correo confirmado! Ya podés iniciar sesión.");
        navigate("/Login"); // Redirigir a login
      } else {
        alert(data.error || "Error al confirmar");
      }
    } catch (error) {
      console.error(error);
      alert("Error en la conexión");
    }
    setLoading(false);
  };

  // Reenviar código de confirmación (opcional)
  const manejarReenvio = async () => {
    if (!usuario) {
      alert("Por favor ingresá tu usuario para reenviar el código.");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/ReenviarCodigo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Código reenviado correctamente.");
      } else {
        alert(data.error || "Error al reenviar código");
      }
    } catch (error) {
      console.error(error);
      alert("Error en la conexión");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <div className="flex w-full max-w-6xl justify-center px-4">
        <div className="w-full max-w-md rounded-md border border-gray-300 p-8 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl font-bold mt-3">Velo</span>
          </div>

          <form onSubmit={manejarEnvio} className="flex flex-col items-center">
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium mb-1">Usuario o Email:</label>
              <input
                type="text"
                value={usuario}
                onChange={manejarCambioUsuario}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700"
                required
              />
            </div>

            <div className="items-center mb-6">
              <label className="block text-sm font-medium mb-1">Código:</label>
              <input
                type="text"
                value={codigo}
                onChange={manejarCambioCodigo}
                className="w-40 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700 text-center"
                maxLength="6"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-40 bg-[#3C6563] text-white py-2 rounded-md font-semibold mb-4 hover:bg-[#1e3234] cursor-pointer disabled:opacity-50"
            >
              {loading ? "Confirmando..." : "Continuar"}
            </button>

            <hr className="my-6 border-gray-300 w-full" />

            <div className="text-center text-sm text-gray-500 mb-2">
              ¿No te llegó el código?
            </div>

            <button 
              type="button" 
              onClick={manejarReenvio}
              className="w-52 bg-[#3C6563] text-white py-2 rounded-md font-semibold hover:bg-[#1e3234] cursor-pointer"
            >
              Reenviar confirmación
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login_ConfirmarMail;
