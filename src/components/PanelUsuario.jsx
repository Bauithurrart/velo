import React, { useState } from 'react';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../backend/userContext.jsx";

const DatosPersonales = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const [pestañaActiva, setPestañaActiva] = useState('datos');
  const [modoEdicion, setModoEdicion] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({
    usuario: '...',
    correo: '...@gmail.com',
    contraseña: 'usuario',
    nombreCompleto: '...',
    dni: '00.000.000'
  });
  const [datosTemporales, setDatosTemporales] = useState({});
  const [tema, setTema] = useState('claro');
  const [idioma, setIdioma] = useState('español');
  const [compraSeleccionada, setCompraSeleccionada] = useState(null);
  const [mostrarOpcionesTema, setMostrarOpcionesTema] = useState(false);
  const [mostrarOpcionesIdioma, setMostrarOpcionesIdioma] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [descargandoFactura, setDescargandoFactura] = useState(false);
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);
  const [hayCambios, setHayCambios] = useState(false);

  const compras = [
    {
      id: 1,
      destino: 'Bariloche, Argentina',
      fecha: '15/08/2023 - 22/08/2023',
      precio: '$120.000',
      estado: 'Completada',
      habitacion: 'Suite Ejecutiva',
      servicios: 'Desayuno incluido, WiFi gratis',
      referencia: '#AR-2023-1582'
    },
    {
      id: 2,
      destino: 'París, Francia',
      fecha: '12/06/2023 - 22/06/2023',
      precio: '$275.000',
      estado: 'Confirmada',
      habitacion: 'Suite Premium',
      servicios: 'Desayuno incluido, Room service, Buffet, WiFi gratis',
      referencia: '#FR-2023-1413'
    },
    {
      id: 3,
      destino: 'Roma, Italia',
      fecha: '20/11/2023 - 30/11/2023',
      precio: '$300.000',
      estado: 'Pendiente',
      habitacion: 'Suite Premium',
      servicios: 'Desayuno y almuerzo incluidos, Expediciones, Room service, WiFi gratis',
      referencia: '#IT-2023-1172'
    }
  ];

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosTemporales(prev => ({ ...prev, [name]: value }));
  };

  const manejarEdicion = () => {
    if (!modoEdicion) {
      setDatosTemporales({ ...datosFormulario });
    }
    setModoEdicion(!modoEdicion);
  };

  const manejarGuardar = () => {
   
    const cambiosRealizados = Object.keys(datosTemporales).some(
      key => datosTemporales[key] !== datosFormulario[key]
    );

    if (cambiosRealizados) {
      setDatosFormulario({ ...datosTemporales });
      setHayCambios(true);
    } else {
      setHayCambios(false);
    }
    
    setModoEdicion(false);
    
   
    if (cambiosRealizados) {
      setMostrarNotificacion(true);
      setTimeout(() => setMostrarNotificacion(false), 3000);
    }
  };

  const manejarCancelar = () => {
    setModoEdicion(false);
  };

  const manejarVerDetalles = (compra) => {
    setCompraSeleccionada(compra);
    setMostrarModal(true);
    setTimeout(() => setAnimarModal(true), 10);
  };

  const cerrarDetalles = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setMostrarModal(false);
      setCompraSeleccionada(null);
    }, 200);
  };

  const descargarFactura = (compra) => {
    setDescargandoFactura(true);
    
    try {
      const contenido = `
        FACTURA DE VELO AGENCY
        ======================
        
        Referencia: ${compra.referencia}
        Fecha de emisión: ${new Date().toLocaleDateString()}
        
        DETALLES DEL VIAJE:
        - Destino: ${compra.destino}
        - Fechas: ${compra.fecha}
        - Tipo de habitación: ${compra.habitacion}
        - Servicios incluidos: ${compra.servicios}
        
        INFORMACIÓN DE PAGO:
        - Total: ${compra.precio}
        - Estado: ${compra.estado}
        
        ----------------------------------
        ¡Gracias por elegirnos. Velo Agency!
        
        Para cualquier consulta:
        Mail: veloagency@hotmail.com
        Tel: +54 11 1234-5678
      `;

      const blob = new Blob([contenido], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `factura-${compra.referencia}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error al generar factura:', error);
      alert('Ocurrió un error al generar la factura');
    } finally {
      setDescargandoFactura(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#a1c8cf] flex items-center justify-center p-4">
    
      {mostrarNotificacion && hayCambios && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fadeInDown">
          <div className="bg-[#3a5f63] text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
            <svg 
              className="w-6 h-6 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span>Tus datos se han guardado correctamente</span>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl">
        <div className="flex">
          <div className="w-1/4 p-6 border-r border-gray-200">
            <div className="flex items-center mb-8">
              <img 
                src="src/assets/Logo-Velo-Negro.png" 
                alt="Logo" 
                className="h-6 mr-2 cursor-pointer"
              />
              <h2 className="text-xl font-semibold cursor-pointer">{datosFormulario.usuario}</h2>
            </div>
            
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setPestañaActiva('datos')}
                  className={`w-full text-left p-3 rounded-lg cursor-pointer ${pestañaActiva === 'datos' ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-900 hover:bg-gray-50'}`}
                >
                  Datos Personales
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setPestañaActiva('compras')}
                  className={`w-full text-left p-3 rounded-lg cursor-pointer ${pestañaActiva === 'compras' ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-900 hover:bg-gray-50'}`}
                >
                  Compras
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setPestañaActiva('personalizacion')}
                  className={`w-full text-left p-3 rounded-lg cursor-pointer ${pestañaActiva === 'personalizacion' ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-900 hover:bg-gray-50'}`}
                >
                  Personalización
                </button>
              </li>            
              <li>
              <button onClick={() => { logout(); navigate("/Login"); }} className="w-full text-left p-3 rounded-lg text-red-600 hover:bg-red-100 cursor-pointer">
                Cerrar sesión
                </button>
                </li>
            </ul>

          </div>

          <div className="w-3/4 p-8">
            {pestañaActiva === 'datos' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-800">Datos personales</h1>
                </div>
                <div className="border-b border-gray-200 mb-6"></div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-1">Nombre de usuario</label>
                      <input
                        type="text"
                        name="usuario"
                        value={modoEdicion ? datosTemporales.usuario : datosFormulario.usuario}
                        onChange={manejarCambio}
                        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3a5f63] focus:border-transparent ${
                          !modoEdicion ? 'bg-gray-100 text-gray-600' : 'bg-white text-gray-800'
                        }`}
                        disabled={!modoEdicion}
                         maxLength={10} 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-1">E-mail</label>
                      <input
                        type="email"
                        name="correo"
                        value={modoEdicion ? datosTemporales.correo : datosFormulario.correo}
                        onChange={manejarCambio}
                        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3a5f63] focus:border-transparent ${
                          !modoEdicion ? 'bg-gray-100 text-gray-600' : 'bg-white text-gray-800'
                        }`}
                        disabled={!modoEdicion}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-1">Contraseña</label>
                      <input
                        type="password"
                        name="contraseña"
                        value={modoEdicion ? datosTemporales.contraseña : datosFormulario.contraseña}
                        onChange={manejarCambio}
                        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3a5f63] focus:border-transparent ${
                          !modoEdicion ? 'bg-gray-100 text-gray-600' : 'bg-white text-gray-800'
                        }`}
                        disabled={!modoEdicion}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-1">Nombre completo</label>
                      <input
                        type="text"
                        name="nombreCompleto"
                        value={modoEdicion ? datosTemporales.nombreCompleto : datosFormulario.nombreCompleto}
                        onChange={manejarCambio}
                        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3a5f63] focus:border-transparent ${
                          !modoEdicion ? 'bg-gray-100 text-gray-600' : 'bg-white text-gray-800'
                        }`}
                        disabled={!modoEdicion}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-1">DNI</label>
                      <input
                        type="text"
                        name="dni"
                        value={modoEdicion ? datosTemporales.dni : datosFormulario.dni}
                        onChange={manejarCambio}
                        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3a5f63] focus:border-transparent ${
                          !modoEdicion ? 'bg-gray-100 text-gray-600' : 'bg-white text-gray-800'
                        }`}
                        disabled={!modoEdicion}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end space-x-3">
                  {modoEdicion ? (
                    <>
                      <button 
                        onClick={manejarCancelar}
                        className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-400 cursor-pointer"
                      >
                        Cancelar
                      </button>
                      <button 
                        onClick={manejarGuardar}
                        className="bg-[#3a5f63] text-white px-4 py-2 rounded-md font-medium hover:bg-[#2d4a4e] cursor-pointer"
                      >
                        Guardar
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={manejarEdicion}
                      className="bg-[#3a5f63] text-white px-4 py-2 rounded-md font-medium hover:bg-[#2d4a4e] cursor-pointer"
                    >
                      Modificar datos
                    </button>
                  )}
                </div>
              </div>
            )}

            {pestañaActiva === 'compras' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-800">Tus Compras</h1>
                </div>
                <div className="border-b border-gray-200 mb-6"></div>
                
                <div className="space-y-6">
                  {compras.map(compra => (
                    <div key={compra.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{compra.destino}</h3>
                          <p className="text-gray-900">{compra.fecha}</p>
                          <p className="text-gray-900">Precio: <span className="font-medium">{compra.precio}</span></p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          compra.estado === 'Completada' ? 'bg-green-100 text-green-800' :
                          compra.estado === 'Confirmada' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {compra.estado}
                        </span>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          
                        </div>
                        <div className="flex space-x-2"> 
                          <button 
                            onClick={() => manejarVerDetalles(compra)} 
                            className="text-sm text-gray-800 hover:underline cursor-pointer whitespace-nowrap"
                          >
                            Ver detalles
                          </button>
                          <button 
                            onClick={() => descargarFactura(compra)}
                            className="text-sm text-gray-800 hover:underline cursor-pointer whitespace-nowrap"
                            disabled={descargandoFactura}
                          >
                            {descargandoFactura ? (
                              <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-1 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generando...
                              </span>
                            ) : (
                              'Descargar factura'
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {pestañaActiva === 'personalizacion' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-800">Personalización</h1>
                </div>
                <div className="border-b border-gray-200 mb-6"></div>
                
                <div className="space-y-6">
                  <div className="mb-6">
                    <label className="block text-md font-medium text-gray-900 mb-2">Tema del sitio</label>
                    <div className="relative">
                      <div 
                        className="flex items-center justify-between w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 cursor-pointer"
                        onClick={() => setMostrarOpcionesTema(!mostrarOpcionesTema)}
                      >
                        <span>{tema === 'claro' ? 'Modo Claro' : 'Modo Oscuro'}</span>
                        <svg 
                          className={`w-5 h-5 text-gray-500 transition-transform ${mostrarOpcionesTema ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {mostrarOpcionesTema && (
                        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                          <div 
                            className="px-3 py-2 hover:bg-[#3a5f63] hover:text-white rounded-md cursor-pointer"
                            onClick={() => {
                              setTema(tema === 'claro' ? 'oscuro' : 'claro');
                              setMostrarOpcionesTema(false);
                            }}
                          >
                            {tema === 'claro' ? 'Modo Oscuro' : 'Modo Claro'}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-md font-medium text-gray-900 mb-2">Idioma</label>
                    <div className="relative">
                      <div 
                        className="flex items-center justify-between w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 cursor-pointer"
                        onClick={() => setMostrarOpcionesIdioma(!mostrarOpcionesIdioma)}
                      >
                        <span>{idioma === 'español' ? 'Español' : 'Inglés'}</span>
                        <svg 
                          className={`w-5 h-5 text-gray-500 transition-transform ${mostrarOpcionesIdioma ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {mostrarOpcionesIdioma && (
                        <div className="absolute z-10 w-full mt-1 bg-white border-[#3a5f63] rounded-md shadow-lg">
                          <div 
                            className="px-3 py-2 hover:bg-[#3a5f63] hover:text-white rounded-md cursor-pointer"
                            onClick={() => {
                              setIdioma(idioma === 'español' ? 'inglés' : 'español');
                              setMostrarOpcionesIdioma(false);
                            }}
                          >
                            {idioma === 'español' ? 'Inglés' : 'Español'}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {mostrarModal && (
        <div className="fixed inset-0 bg-[#a1c8cf] bg-opacity-50 flex items-center justify-center z-50">
          <div className={`bg-white rounded-lg p-6 max-w-md w-full mx-4 transform transition-all duration-300 ease-out ${
            animarModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <div className="flex items-center mb-4 relative">
              <img 
                src="src/assets/Logo-Velo-Negro.png" 
                alt="Logo Velo" 
                className="h-8" 
              />
              <h2 className="font-bold absolute left-1/2 transform text-lg -translate-x-1/2">
                Detalles de tu compra
              </h2>
            </div>
            
            <div className="space-y-3">
              <p><strong>Destino:</strong> {compraSeleccionada?.destino}</p>
              <p><strong>Fechas:</strong> {compraSeleccionada?.fecha}</p>
              <p><strong>Precio:</strong> {compraSeleccionada?.precio}</p>
              <p><strong>Habitacion:</strong> {compraSeleccionada?.habitacion}</p>
              <p><strong>Servicios:</strong> {compraSeleccionada?.servicios}</p>
              <p><strong>Referencia:</strong> {compraSeleccionada?.referencia}</p>
              <p><strong>Estado:</strong> 
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  compraSeleccionada?.estado === 'Completada' ? 'bg-green-100 text-green-800' :
                  compraSeleccionada?.estado === 'Confirmada' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {compraSeleccionada?.estado}
                </span>
              </p>
            </div>
            
            <div className="flex justify-center mt-6">
              <button
                onClick={cerrarDetalles}
                className="bg-[#3a5f63] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-[#2d4a4e] transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatosPersonales;