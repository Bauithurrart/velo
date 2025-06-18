import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../backend/userContext.jsx";
import {
  BedDouble,
  Plane,
  Car,
  Briefcase,
  ChevronDown,
  User,
  ShoppingCart
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const { usuario } = useContext(UserContext);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const referenciaMenu = useRef(null);

  useEffect(() => {
    const manejarClickFuera = (evento) => {
      if (referenciaMenu.current && !referenciaMenu.current.contains(evento.target)) {
        setMenuAbierto(false);
      }
    };

    document.addEventListener("mousedown", manejarClickFuera);
    return () => {
      document.removeEventListener("mousedown", manejarClickFuera);
    };
  }, []);

  const irUsuario = () => {
    if (usuario) {
      navigate("/PanelUsuario");
    } else {
      navigate("/Login");
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-5 text-white backdrop-blur-md bg-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            
            <span className="text-[18px] font-semibold">Velo</span>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-[15px] font-medium relative">
          <div className="relative cursor-pointer" ref={referenciaMenu}>
            <div
              className="flex items-center space-x-1"
              onClick={() => setMenuAbierto((prev) => !prev)}
            >
              <span>Servicios</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {menuAbierto && (
              <div className="absolute top-8 right-[-40px] bg-white/90 text-black rounded-sm shadow-md w-40  z-10 backdrop-blur-sm animate-fadeIn transition-all duration-200 ease-out origin-top transform scale-100 opacity-100">
                <div onClick={() => navigate("/Alojamientos")} className="flex items-center px-2 py-2 hover:bg-[#3a5f63] hover:text-white rounded-sm cursor-pointer">
                  <BedDouble className="w-5 h-5 mr-3" />
                  Alojamientos
                </div>
                <div onClick={() => navigate("/Paquetes")} className="flex items-center px-2 py-2 hover:bg-[#3a5f63] hover:text-white cursor-pointer">
                  <Briefcase className="w-5 h-5 mr-3" />
                  Paquetes
                </div>
                <div onClick={() => navigate("/Vuelos")} className="flex items-center px-2 py-2 hover:bg-[#3a5f63] hover:text-white cursor-pointer">
                  <Plane className="w-5 h-5 mr-3" />
                  Vuelos
                </div>
                <div onClick={() => navigate("/Vehiculos")} className="flex items-center px-2 py-2 hover:bg-[#3a5f63] hover:text-white cursor-pointer">
                  <Car className="w-5 h-5 mr-3" />
                  Alquiler de autos
                </div>
              </div>
            )}
          </div>

          <a onClick={() => navigate("/Nosotros")} className="hover:text-[#a1c8cf] transition cursor-pointer">Nosotros</a>
          <a className="hover:text-[#a1c8cf] transition cursor-pointer">Soporte</a>

          <div
            className="flex items-center space-x-4 ml-4 cursor-pointer"
            onClick={irUsuario}
            title={usuario ? usuario.nombre : "Iniciar sesión"}
          >
            <User className="w-5 h-5" />
          </div>

          <ShoppingCart
            onClick={() => navigate("/Carrito")}
            className="w-5 h-5 cursor-pointer"
            title="Carrito"
          />
        </div>
      </div>

      <div className="w-full h-[1px] bg-white mt-2"></div>
    </nav>
  );
}