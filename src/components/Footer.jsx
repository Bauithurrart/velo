import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const botonWhatsapp = () => {
    const numeroTelefono = '2494019801';
    const mensaje = encodeURIComponent('Buenas, me gustaría enviar mi reseña sobre Velo.');
    window.open(`https://wa.me/${numeroTelefono}?text=${mensaje}`, '_blank');
  };

  return (
    <footer className="bg-[#3a5f63] text-white pt-12 pb-6 font-sans">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Velo</h2>
            <p>
              Tu compañero de viaje perfecto. Ofrecemos las mejores experiencias turísticas alrededor del mundo.
            </p>
            
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paquetes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alojamientos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>Av. Artiga 1983, Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <span>veloagency@hotmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaClock />
                <span>Lun-Vie: 8:00 - 20:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Envíanos tu reseña</h3>
            <p className="mb-4">
              Nos interesa saber tu opinión, no dudes en enviarla para mejorar constantemente.
            </p>
            <button
              onClick={botonWhatsapp}
              className="bg-[#4a7d82] hover:bg-[#5a8d92] text-white cursor-pointer py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#5a8d92]"
              aria-label="Enviar reseña por WhatsApp"
            >
              Enviar reseña
            </button>
          </div>    
        </div>

        <div className="border-t border-white/30 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Velo. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;