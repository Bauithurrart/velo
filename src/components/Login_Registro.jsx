import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoVeloNegro from "../assets/Logo-Velo-Negro.png";

const Registro = () => {
  const navigate = useNavigate();
  const [datosRegistro, setDatosRegistro] = useState({
    usuario: "",
    contraseña: "",
    newsletter: false,
  });

  const manejarCambioRegistro = (e) => {
    const { name, type, value, checked } = e.target;
    setDatosRegistro((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const manejarEnvioRegistro = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/Registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosRegistro),
      });
      const data = await res.json();

      if (res.ok) {
        alert(data.mensaje);
        navigate("/Confirmar"); // ruta para confirmación mail (ajustar según tengas)
      } else {
        alert(data.error || "Error al registrarse");
      }
    } catch (error) {
      console.error("Error en registro:", error);
      alert("Error en el registro");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans bg-pink-200">
      <div className="flex w-full max-w-6xl justify-between px-4">
        <div className="flex flex-col ml-24">
          <div className="flex items-center gap-2 mb-4">
            <img src={LogoVeloNegro} alt="Logo Velo" className="w-22" />
            <span className="text-3xl font-bold mt-3">Velo</span>
          </div>
          <h1 className="text-4xl font-semibold text-black leading-[1.6] tracking-tight p-1">
            Ingresa tu usuario o E-mail para registrarte
          </h1>
        </div>

        <div className="w-full max-w-md rounded-md border border-gray-300 p-8">
          <form onSubmit={manejarEnvioRegistro}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Usuario o E-mail:
              </label>
              <input
                type="text"
                name="usuario"
                value={datosRegistro.usuario}
                onChange={manejarCambioRegistro}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700"
                required
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">
                Contraseña:
              </label>
              <input
                type="password"
                name="contraseña"
                value={datosRegistro.contraseña}
                onChange={manejarCambioRegistro}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700"
                required
              />
            </div>

            <div className="text-sm text-gray-500 m-6 text-center flex items-center">
              <input
                type="checkbox"
                id="notificaciones_mail"
                name="newsletter"
                checked={datosRegistro.newsletter}
                onChange={manejarCambioRegistro}
                className="h-4 w-4 text-teal-600 m-1 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="notificaciones_mail" className="m-0.5 cursor-pointer">
                Recibe las mejores noticias y beneficios por email.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3C6563] text-white py-2 rounded-md font-semibold hover:bg-[#1e3234] cursor-pointer"
            >
              Continuar
            </button>

            <hr className="my-6 border-gray-300" />

            <div className="text-center text-sm text-gray-500 mb-2">
              ¿Ya tienes cuenta?
            </div>

            <button
              onClick={() => navigate("/Login")}
              type="button"
              className="w-full bg-[#3C6563] text-white py-2 rounded-md font-semibold inline-block text-center hover:bg-[#1e3234] cursor-pointer"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
