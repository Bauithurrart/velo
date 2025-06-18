import React, { useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoVeloNegro from "../assets/Logo-Velo-Negro.png";
import { UserContext } from "../../backend/userContext.jsx";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [datosLogin, setDatosLogin] = useState({
    usuario: "",
    contraseña: "",
  });

  const manejarCambioLogin = (e) => {
    const { name, value } = e.target;
    setDatosLogin((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvioLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosLogin),
      });
      const data = await res.json();

if (res.ok) {
  login(data.usuario); // Guarda el usuario en contexto y localStorage
  if (data.usuario.rol === "admin") {
    navigate("/PanelJefe");
  } else {
    navigate("/PanelUsuario");
  }
      } else {
        alert(data.error || "Error en login");
      }
    } catch (error) {
      console.error("Error en login:", error);
      alert("Error en el login");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans bg-pink-200">
      <div className="flex w-full max-w-6xl justify-between px-4">
        <div className="flex flex-col ml-24">
          <div className="flex items-center gap-2 mb-4">
            <img src={LogoVeloNegro} alt="" className="w-22" />
            <span className="text-3xl font-bold mt-3">Velo</span>
          </div>
          <h1 className="text-4xl font-semibold text-black leading-[1.6] tracking-tight p-1">
            Ingresa tu usuario o E-mail para iniciar sesión
          </h1>
        </div>

        <div className="w-full max-w-md rounded-md border border-gray-300 p-8">
          <form onSubmit={manejarEnvioLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Usuario o E-mail:
              </label>
              <input
                type="text"
                name="usuario"
                value={datosLogin.usuario}
                onChange={manejarCambioLogin}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">
                Contraseña:
              </label>
              <input
                type="password"
                name="contraseña"
                value={datosLogin.contraseña}
                onChange={manejarCambioLogin}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
            </div>

            <button className="text-sm text-gray-500 mb-4 text-center cursor-pointer">
              ¿Olvidaste tu contraseña?
            </button>

            <button
              type="submit"
              className="w-full bg-[#3C6563] text-white py-2 rounded-md font-semibold hover:bg-[#1e3234] cursor-pointer"
            >
              Continuar
            </button>

            <hr className="my-6 border-gray-300" />

            <div className="text-center text-sm text-gray-500 mb-2">
              ¿No tienes cuenta?
            </div>

            <button
              onClick={() => navigate("/Registro")}
              type="button"
              className="w-full bg-[#3C6563] text-white py-2 rounded-md font-semibold inline-block text-center hover:bg-[#1e3234] cursor-pointer"
            >
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


