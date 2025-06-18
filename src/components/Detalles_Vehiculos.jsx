import { useState } from 'react';
import PropTypes from 'prop-types';

const VehiculoCard = ({ vehiculo, onAgregarAlCarrito }) => {
  const [fechas, setFechas] = useState({
    retiro: '',
    entrega: ''
  });
  const [errorFecha, setErrorFecha] = useState('');

  const validarFechas = (retiro, entrega) => {
    const fechaRetiro = new Date(retiro);
    const fechaEntrega = new Date(entrega);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    const fechaMaxima = new Date(fechaRetiro);
    fechaMaxima.setMonth(fechaMaxima.getMonth() + 1);
    
    if (fechaRetiro < hoy) return 'No puedes seleccionar fechas pasadas';
    if (fechaEntrega < fechaRetiro) return 'La fecha de entrega no puede ser anterior a la de retiro';
    if (fechaEntrega > fechaMaxima) {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return `El plazo máximo es de 1 mes (hasta ${fechaMaxima.toLocaleDateString('es-ES', options)})`;
    }
    return '';
  };

  const handleFechaChange = (tipo, value) => {
    if (value && value.split('-')[0].length > 4) return;

    const newFechas = { ...fechas, [tipo]: value };
    setFechas(newFechas);
    
    if (newFechas.retiro && newFechas.entrega) {
      setErrorFecha(validarFechas(newFechas.retiro, newFechas.entrega));
    }
  };

  const handleAgregarAlCarrito = () => {
    if (!fechas.retiro || !fechas.entrega) {
      setErrorFecha('Por favor selecciona ambas fechas');
      return;
    }
    if (!errorFecha) onAgregarAlCarrito(vehiculo);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-200">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">{vehiculo.nombre}</h2>
        <p className="text-gray-600 font-semibold text-center mb-4">{vehiculo.description}</p>
        
        <div className="flex justify-between items-center bg-[#f5f9fa] p-4 rounded-lg mb-4">
          <div className="text-center">
            <span className="block text-md text-gray-700">Precio</span>
            <span className="text-2xl font-bold text-[#3a5f63]">${vehiculo.precio}</span>
            <span className="block text-sm text-gray-700">Por hora</span>
          </div>
          <div className="h-10 w-px bg-gray-300"></div>
          <div className="text-center">
            <span className="block text-md text-gray-700">Asientos</span>
            <span className="text-2xl font-bold text-[#3a5f63]">{vehiculo.asientos || 4}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-md font-medium text-[#3a5f63] mb-1">Fecha de retiro</label>
            <input
              type="date"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#3a5f63] focus:ring-[#3a5f63] p-3 border"
              value={fechas.retiro}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => handleFechaChange('retiro', e.target.value)}
              onKeyDown={(e) => e.preventDefault()}
            />
          </div>
          <div>
            <label className="block text-md font-medium text-[#3a5f63] mb-1">Fecha de entrega</label>
            <input
              type="date"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#3a5f63] focus:ring-[#3a5f63] p-3 border"
              value={fechas.entrega}
              min={fechas.retiro || new Date().toISOString().split('T')[0]}
              onChange={(e) => handleFechaChange('entrega', e.target.value)}
              onKeyDown={(e) => e.preventDefault()}
            />
          </div>
          {errorFecha && <p className="text-red-500 text-xs mt-1">{errorFecha}</p>}
        </div>
        
        <button
          onClick={handleAgregarAlCarrito}
          className={`mt-6 w-full px-4 py-3 bg-[#3a5f63] text-white rounded-lg hover:bg-[#2d4b4e] transition duration-300 ease-in-out transform hover:scale-[1.02] cursor-pointer font-medium ${
            errorFecha ? 'opacity-70' : ''
          }`}
          disabled={!!errorFecha}
          aria-label="Agregar vehículo al carrito"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

VehiculoCard.propTypes = {
  vehiculo: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    asientos: PropTypes.number
  }).isRequired,
  onAgregarAlCarrito: PropTypes.func.isRequired
};

const Detalles_Vehiculos = () => {
  const [vehiculoActual, setVehiculoActual] = useState(0);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [vehiculoAgregado, setVehiculoAgregado] = useState('');

  const vehiculos = [
    {
      nombre: "Toyota Corolla",
      description: "Auto mediano, ideal para ciudad o viajes cortos.",
      precio: 70,
      asientos: 6,
    },
    {
      nombre: "Volkswagen Amarok",
      description: "Camioneta ideal para viajes largos y terrenos rurales.",
      precio: 120,
    },
    {
      nombre: "Chevrolet Tracker",
      description: "SUV compacta, cómoda y segura para toda la familia.",
      precio: 95,
    },
    {
      nombre: "Ford Ranger",
      description: "Camioneta potente con excelente capacidad de carga.",
      precio: 130,
    }
  ];

  const cambiarVehiculo = (direccion) => {
    setVehiculoActual(prev => 
      direccion === 'next' 
        ? (prev === vehiculos.length - 1 ? 0 : prev + 1)
        : (prev === 0 ? vehiculos.length - 1 : prev - 1)
    );
  };

  const agregarAlCarrito = (vehiculo) => {
    setVehiculoAgregado(vehiculo.nombre);
    setMostrarAlerta(true);
    setTimeout(() => setMostrarAlerta(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#a1c8cf] p-4 relative">
      <div className="w-full mt-[7rem] max-w-4xl flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-6">
          <button 
            onClick={() => cambiarVehiculo('prev')}
            className="bg-white p-3 rounded-full shadow-md hover:bg-[#3a5f63] z-10 cursor-pointer transition-transform hover:scale-110"
            aria-label="Vehículo anterior"
          >
            <svg className="w-6 h-6 text-[#3a5f63] hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {vehiculos.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => setVehiculoActual(index)}
                className={`w-3 h-3 rounded-full ${index === vehiculoActual ? 'bg-[#3a5f63]' : 'bg-gray-300'} cursor-pointer transition-colors`}
                aria-label={`Ir al vehículo ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={() => cambiarVehiculo('next')}
            className="bg-white p-3 rounded-full shadow-md hover:bg-[#3a5f63] text-white z-10 cursor-pointer transition-transform hover:scale-110"
            aria-label="Siguiente vehículo"
          >
            <svg className="w-6 h-6 text-[#3a5f63] hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <VehiculoCard 
          vehiculo={vehiculos[vehiculoActual]} 
          onAgregarAlCarrito={agregarAlCarrito}
        />
      </div>

      {mostrarAlerta && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 animate-slideDown">
          <div className="bg-[#3a5f63] text-white px-4 py-3 rounded-lg shadow-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="font-medium">Tu {vehiculoAgregado} se agregó al carrito</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detalles_Vehiculos;